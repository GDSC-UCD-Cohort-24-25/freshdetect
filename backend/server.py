from flask import Flask, request, jsonify
from flask_cors import CORS
import tensorflow as tf
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import img_to_array
from PIL import Image
import io
import os

# Disable GPU if needed
os.environ["CUDA_VISIBLE_DEVICES"] = "-1"

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load the TensorFlow model
try:
    model = load_model("models/model_v1_meat.h5")
    print("Model loaded successfully!")
except Exception as e:
    print(f"Error loading model: {e}")
    model = None

# Define class names
class_names = ['FRESH', 'HALF', 'SPOILED']

# Preprocessing function
def preprocess_image(image):
    # Resize to the expected input size (adjust if your model requires different dimensions)
    img = image.resize((128, 128))
    # Convert to array and expand dimensions for batch
    img_array = img_to_array(img)
    img_array = np.expand_dims(img_array, 0)
    return img_array

# API endpoint for classification
@app.route('/classify', methods=['POST'])
def classify():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    if model is None:
        return jsonify({'error': 'Model not loaded properly'}), 500

    file = request.files['file']
    image = Image.open(io.BytesIO(file.read())).convert('RGB')
    input_tensor = preprocess_image(image)

    # Make prediction
    predictions = model.predict(input_tensor)
    predicted_class_index = np.argmax(predictions[0])
    predicted_class = class_names[predicted_class_index]
    
    # Include confidence scores for all classes
    confidence_scores = {class_names[i]: float(predictions[0][i]) for i in range(len(class_names))}
    
    return jsonify({
        'class': predicted_class,
        'confidence': float(predictions[0][predicted_class_index]),
        'all_scores': confidence_scores
    })

if __name__ == '__main__':
    app.run(debug=True)