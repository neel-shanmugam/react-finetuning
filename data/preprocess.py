import pandas as pd
import json
from pathlib import Path

def convert_to_json(file_paths, output_path):
    """
    Convert CSV data to JSON format as specified by DeepSeek-Coder Sample Data
    """

    lines = []

    for file_path in file_paths:
        if file_path == "train/root_child_components.csv":
            lines.extend(convert_root_child_to_json())
            continue

        csv_data = pd.read_csv(file_path)

        # Iterate through the DataFrame row by row
        for _, row in csv_data.iterrows():
            output = row["output"]
            instruction = row["prompt"]
            lines.append({"instruction": instruction, "output": output})

    with open(output_path, 'w') as f:
        json.dump(lines, f)

    return lines

def convert_root_child_to_json():
    file_path = "train/root_child_components.csv"
    lines = []

    csv_data = pd.read_csv(file_path)

    for _, row in csv_data.iterrows():
        # Single component generation
        output = row["child_component"]
        instruction = row["prompt_generate_child"]
        lines.append({"instruction": instruction, "output": output})

        # Root component integration
        instruction = f"""
        {row["prompt_add_to_root"]}

        Use the following code for context.

        Root Component:
        "{row["filtered_root_component"]}"

        {row["child_component_name"]} Component:
        "{row["child_component"]}"
        """
        output = row["root_component"]
        lines.append({"instruction": instruction, "output": output})
    
    return lines

convert_to_json(["train/oss_instruct.csv", "train/root_child_components.csv", "train/single_components.csv"], "train/full_dataset.json")