# Pull the base image with python 3.9 as a runtime for your Lambda
FROM public.ecr.aws/lambda/python:3.9
# Copy the earlier created requirements.txt file to the container
COPY requirements.txt .

# Install the python requirements from requirements.txt
RUN pip3 install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"

# Copy the earlier created app.py file to the container
COPY app.py ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler
CMD ["app.handler"]