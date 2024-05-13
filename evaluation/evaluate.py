import csv
import os
import torch
from transformers import AutoTokenizer, AutoModelForCausalLM

# MODEL_NAME = "full"
# model_dir = f'/home/ss6167/GEN_AI_FINAL_PROJECT/models/{MODEL_NAME}'
# tokenizer = AutoTokenizer.from_pretrained(model_dir)
# model = AutoModelForCausalLM.from_pretrained(model_dir, torch_dtype=torch.bfloat16).cuda()

tokenizer = AutoTokenizer.from_pretrained("deepseek-ai/deepseek-coder-1.3b-instruct", trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained("deepseek-ai/deepseek-coder-1.3b-instruct", trust_remote_code=True, torch_dtype=torch.bfloat16).cuda()

# model = "codellama/CodeLlama-7b-Instruct-hf"
# tokenizer = AutoTokenizer.from_pretrained(model)
# model = AutoModelForCausalLM.from_pretrained(model, torch_dtype=torch.bfloat16).cuda()

# Function to generate React component code based on a given prompt
def generate_react_component(prompt):
    # Replace this with your code generation model logic
    # For demonstration purposes, just return a simple React component
    print(f"Prompt: {prompt}")
    inputs = tokenizer(prompt, return_tensors="pt").to(model.device)
    outputs = model.generate(**inputs, max_length=2048)
    return tokenizer.decode(outputs[0], skip_special_tokens=True)

# Function to create a directory if it doesn't exist
def create_directory(directory):
    if not os.path.exists(directory):
        os.makedirs(directory)

# Function to save React component code to a JavaScript file
def save_component_to_file(component_name, code):
    file_path = os.path.join("generated_components", f"{component_name}.js")
    with open(file_path, "w") as file:
        file.write(code)
    print(f"Component {component_name} saved to {file_path}")

# Main function to iterate through the CSV, generate components, and save them to files
def generate_components_from_csv(csv_file):
    create_directory("generated_components")
    with open(csv_file, mode="r") as file:
        reader = csv.reader(file)
        next(reader)  # Skip header row if exists
        for row in reader:
            prompt, component_name = row
            component_code = generate_react_component(prompt)
            save_component_to_file(component_name, component_code)
            print()

# Example usage:
csv_file_path = "evaluation.csv"  # Path to your CSV file containing prompts and component names
generate_components_from_csv(csv_file_path)
