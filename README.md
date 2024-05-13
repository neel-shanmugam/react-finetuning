To run our script that pulls data from HuggingFace and curates it for our React code generation task, first import the following libraries:

> pip install --upgrade google-api-python-client

Then you may run any of the Python scripts under gemini_data_prompting, which curates CSV files of data in response to directed Gemini prompts. For example:

> python3 single_component_prompting.py

Once the data is extracted, you can feed it into the DataIngestion Python notebook to generate the four datasets used for fine-tuning: the Full (Combined) training set of 1100 examples (500 React single components, 100 React two components, 500 OSS-Instruct), the curated React component dataset of 1000 examples, or the adapted OSS-Instruct dataset of 1000 examples. This notebook includes the sampling and pre-processing methods employed to get the training data. 

All the final training data is stored under the data/ directory. As the outputs of gemini_data_prompting and DataIngestion.pynb are CSV files, you can run `python3 preprocess.py` to re-write the CSV files as JSON files that can be used for fine-tuning. 

The fine-tuning scripts under finetuning/ train the DeepSeek-Coder-Instruct-1.3B base model on any sample data you specify. It employs DeepSpeed to optimize for memory and runtime. You can configure any of the DeepSpeed or training options by modifying configs/ds_config_zero3.json and/or finetune_13.sh. Once you are ready to fine-tune, run:

> bash finetune_13.sh

The script to prompt each model on the examples in the evaluation benchmark is under the evaluation/ directory and can be run via `python3 evaluate.py`. This will generate a folder of React Javascript files that correspond to each example from the benchmark. You can copy these files over to the evaluator/src directory to run testing via Jest. 

> npm test
