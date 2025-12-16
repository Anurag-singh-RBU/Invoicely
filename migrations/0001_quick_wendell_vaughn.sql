ALTER TABLE "user_imgs" ADD COLUMN "sign_url" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user_imgs" ADD COLUMN "public_id" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user_imgs" DROP COLUMN "img_url";