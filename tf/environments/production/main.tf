terraform {
  backend "s3" {
    bucket = "tf-state-production"
    key    = "portfolio"
    region = "ap-southeast-2"
  }
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.30.0"
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

module "route53" {
  source            = "../../modules/route53"
  domain            = local.domain
  cloudfront_domain = module.cloudfront.cloudfront_domain
  cloudfront_zone   = module.cloudfront.cloudfront_zone_id
}
