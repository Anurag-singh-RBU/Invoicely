CREATE TABLE "user_signs" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"sign_url" text NOT NULL,
	"public_id" text NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "user_imgs" ADD COLUMN "img_url" text NOT NULL;--> statement-breakpoint
ALTER TABLE "user_signs" ADD CONSTRAINT "user_signs_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_imgs" DROP COLUMN "sign_url";--> statement-breakpoint
ALTER TABLE "user_imgs" DROP COLUMN "public_id";