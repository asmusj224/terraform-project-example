GITHUB_SHA?=latest
PROJECT_ID=terraform-project-example
LOCAL_TAG=terraform-app:$(GITHUB_SHA)
REMOTE_TAG=asmusj024/$(PROJECT_ID)/$(LOCAL_TAG)

run-local:
	docker-compose up

login-docker-hub:
	echo ${{ secrets.DOCKER_PASSWORD }} | docker login -u ${{ secrets.DOCKER_USERNAME }} --password-stdin

build-container:
	docker build -t $(LOCAL_TAG) .

push: 
	docker tag $(LOCAL_TAG) $(REMOTE_TAG)
	docker push $(REMOTE_TAG)
