import google.generativeai as genai
from google.ai.generativelanguage import GenerationConfig 
import difflib
import pandas as pd

# Configure the Generative AI model
genai.configure(api_key="AIzaSyBfaZWS43HXGPoVUqF3oVQnH4F8WtQdwzs")

# Instantiate the model
model = genai.GenerativeModel('gemini-pro')
# Generation Config
config = GenerationConfig(
    max_output_tokens=2048, temperature=0.4, top_p=1, top_k=32
)

data = pd.read_csv('root_child_components_final.csv')

def generate_patch(root_component, child_component_name, id_num):
  with open(f'../diffs_final/modified/{id_num}.js', 'w') as file:
      file.write(root_component)

  try:
      # Generate the content
      response = model.generate_content(f"""
      Return the following code after removing all references of the f{child_component_name} component. 

      Code:
      {root_component}""",
      generation_config = config
      )
      # Extract the text response (modify this according to how you can access the text in the response)
      diff_file = response.text + "\n"

      with open(f'../diffs_final/originals/{id_num}.js', 'w') as file:
          file.write(diff_file)

      # Compute the diff
      patch = difflib.unified_diff(diff_file.splitlines(1), root_component.splitlines(1), fromfile=f'../diffs/modified/{id_num}.js', tofile=f'../diffs/originals/{id_num}.js')
      with open(f'../diffs_final/patches/{id_num}.patch', 'w') as file:
          file.writelines(patch)
  except Exception as e:
      print(f"An error occurred: {e}")

  return root_component, diff_file, patch

filtered_root_components = []
patches = []
for index, row in data.iterrows():
  root_component = row['root_component'] + '\n'
  child_component_name = row['child_component_name']
  id_num = index + 1
  _, filtered_component, patch = generate_patch(root_component, child_component_name, id_num)
  filtered_root_components.append(filtered_component)
  patches.append(patch)

data["patch_file"] = patches
data["filtered_root_component"] = filtered_root_components

data.to_csv("root_child_components_final_extracted.csv")