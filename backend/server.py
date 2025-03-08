from flask import Flask, request, jsonify
from flask_cors import CORS  # Import CORS
import torch
import timm  
from torchvision import transforms
from PIL import Image
import io

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Define the model architecture
class MeatFreshnessModel(torch.nn.Module):
    def __init__(self, num_classes=3):  
        super(MeatFreshnessModel, self).__init__()
        self.model = timm.create_model("rexnet_150", pretrained=True, num_classes=num_classes)

    def forward(self, x):
        return self.model(x)

# Load model
model = MeatFreshnessModel()
state_dict = torch.load("./model_weights/saved_models/meat_best_model.pth", map_location=torch.device('cpu'))
model.load_state_dict(state_dict, strict=False)
model.eval()

# Preprocessing function
def preprocess_image(image):
    transform = transforms.Compose([
        transforms.Resize((224, 224)),
        transforms.ToTensor(),
        transforms.Normalize(mean=[0.485, 0.456, 0.406], std=[0.229, 0.224, 0.225]),
    ])
    return transform(image).unsqueeze(0)

# API endpoint for classification
@app.route('/classify', methods=['POST'])
def classify():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    image = Image.open(io.BytesIO(file.read())).convert('RGB')
    input_tensor = preprocess_image(image)

    with torch.no_grad():
        output = model(input_tensor)
        _, predicted = torch.max(output, 1)
        class_id = predicted.item()

    labels = ['FRESH', 'HALF', 'SPOILED']
    result = labels[class_id]

    return jsonify({'class': result})

if __name__ == '__main__':
    app.run(debug=True)
