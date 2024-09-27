terraform {
  cloud {
    organization = "skyfire-1704"
    workspaces {
      name = "ecs-fargate-github"
    }
  }
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}
provider "aws" {
  region = var.aws_region
  # profile = var.aws_profile

}
