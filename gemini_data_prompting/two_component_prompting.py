import google.generativeai as genai
from google.ai.generativelanguage import GenerationConfig 
import pandas as pd
import time

# Configure the Generative AI model
genai.configure(api_key="AIzaSyBfaZWS43HXGPoVUqF3oVQnH4F8WtQdwzs")

# Instantiate the model
model = genai.GenerativeModel('gemini-pro')
# Generation Config
config = GenerationConfig(
    max_output_tokens=2048, temperature=0.4, top_p=1, top_k=32
)

data = pd.read_csv('root_child_components_prompting.csv')

def generate_child_prompt(child_component):
  try:
      # Generate the content
      response = model.generate_content(f"""
      Generate a non-technical but specific prompt that can be inputted into an LLM to generate the code snippet. In the prompt, only use a description of the intended user experience and provide no references to the actual code, meaning no references to any component props or functions.  

      Code:
      {child_component}""",
      generation_config = config
      )
      # Extract the text response (modify this according to how you can access the text in the response)
      child_prompt = response.text

      print(child_prompt)
      time.sleep(1)
      
      return child_prompt
  except Exception as e:
      print(f"An error occurred: {e}")
  
  return None

def generate_root_prompt(root_component, patch_file, child_component, child_component_name):
    try:
      # Generate the content
      response = model.generate_content(f"""
      From the given patch file, write a natural language prompt that prompts an LLM to generate the following code changes, which change the code within the root component to integrate the new component. 
      When referencing the root component, use the name of the component from the given patch file. When referencing the new component, use the name "{child_component_name}". 
      Besides these, in the prompt, only use a description of the intended user experience and provide no references to the actual code, meaning no references to any component props or functions.

      New Component:
      "{child_component}"

      Root Component:
      "{root_component}"

      Root Component Patch File:
      "{patch_file}"
      """,
      generation_config = config
      )
      # Extract the text response (modify this according to how you can access the text in the response)
      root_prompt = response.text

      print(root_prompt)
      time.sleep(1)
      
      return root_prompt
    except Exception as e:
      print(f"An error occurred: {e}")
  
    return None

child_prompts = []
root_prompts = []
for index, row in data.iterrows():
  root_component = row['root_component']
  patch_file = row['patch_file']
  child_component_name = row['child_component_name']
  child_component = row['child_component']
  child_prompt = generate_child_prompt(child_component)
  root_prompt = generate_root_prompt(root_component, patch_file, child_component, child_component_name)
  child_prompts.append(child_prompt)
  root_prompts.append(root_prompt)

data["prompt_generate_child"] = child_prompts
data["prompt_add_to_root"] = root_prompts

data.to_csv("root_child_components_final_prompts.csv")