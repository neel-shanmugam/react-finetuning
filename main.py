import csv
import google.generativeai as genai
from datasets import load_dataset
import time

# Configure the Generative AI model
genai.configure(api_key="AIzaSyBfaZWS43HXGPoVUqF3oVQnH4F8WtQdwzs")

# Load the dataset
dataset = load_dataset("EddieChen372/react_repos", split="train[1000:1500]")
data = dataset["content"]

# Open a CSV file for writing
with open('test.csv', mode='w', newline='', encoding='utf-8') as file:
    writer = csv.writer(file)
    # Write the header row
    writer.writerow(['code', 'response'])

    for code_snippet in data:
        try:
            # Instantiate the model
            model = genai.GenerativeModel('gemini-pro')
            # Generate the content
            response = model.generate_content("""
            Generate a non-technical but specific prompt that can be inputted into an LLM to generate the code snippet.
            Output the description and only the description.

            Code:
            #####
            """ + code_snippet + """
            #####
            """)
            # Extract the text response (modify this according to how you can access the text in the response)
            response_text = response.text
            print(response_text)

            # Write the code snippet and response to the CSV
            writer.writerow([code_snippet, response_text])
            time.sleep(2)
        except Exception as e:
            print(f"An error occurred: {e}")
            continue
