GITHUB_SHA?=latest
PROJECT_ID=terraform-project-example
LOCAL_TAG=terraform-app:$(GITHUB_SHA)
REMOTE_TAG=asmusj024/$(PROJECT_ID)/$(LOCAL_TAG)


log_var:
   echo $(DOCKER_USERNAME)

run-local:
	docker-compose up

build-container:
	docker build -t $(LOCAL_TAG) .

push: 
	docker tag $(LOCAL_TAG) $(REMOTE_TAG)
	docker push $(REMOTE_TAG)
