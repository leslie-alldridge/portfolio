terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.63.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"

  default_tags {
    tags = {
      repository  = "portfolio"
      environment = "production"
    }
  }
}

locals {
  domain = "leslie-alldridge.dev"
}

module "bucket" {
  source = "../../modules/bucket"
  domain = local.domain
}

module "cloudfront" {
  source        = "../../modules/cloudfront"
  domain        = local.domain
  bucket_domain = module.bucket.domain
}
