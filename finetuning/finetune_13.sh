DATA_PATH="/home/ss6167/GEN_AI_FINAL_PROJECT/data/train/single_components_ablation.json"
OUTPUT_PATH="/home/ss6167/GEN_AI_FINAL_PROJECT/models/single_components_ablation"
MODEL="deepseek-ai/deepseek-coder-1.3b-instruct"

cd finetune && deepspeed finetune_deepseekcoder.py \
    --model_name_or_path $MODEL \
    --data_path $DATA_PATH \
    --output_dir $OUTPUT_PATH \
    --num_train_epochs 2 \
    --model_max_length 2048 \
    --per_device_train_batch_size 4 \
    --per_device_eval_batch_size 1 \
    --gradient_accumulation_steps 8 \
    --evaluation_strategy "no" \
    --save_strategy "steps" \
    --save_steps 100 \
    --save_total_limit 100 \
    --learning_rate 2e-5 \
    --warmup_steps 10 \
    --logging_steps 1 \
    --lr_scheduler_type "cosine" \
    --gradient_checkpointing True \
    --report_to "tensorboard" \
    --deepspeed /home/ss6167/GEN_AI_FINAL_PROJECT/DeepSeek-Coder/finetune/configs/ds_config_zero3.json \
    --bf16 True