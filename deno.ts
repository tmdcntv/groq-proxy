curl --location 'https://droppy.deno.dev/api.groq.com/v1/chat/completions' \
--header 'Authorization: Bearer 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' \
--header 'Content-Type: application/json' \

--data '{
    "messages": [
        {
            "role": "system",
            "content": "You are a test assistant."
        },
        {
            "role": "user",
            "content": "Testing. Just say hi and nothing else."
        }
    ],
    "model": "gemini-2.0-flash-exp"
}'
