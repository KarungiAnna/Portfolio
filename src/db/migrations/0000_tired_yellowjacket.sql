CREATE TABLE "contact_messages" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"subject" text,
	"message" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE "experiences" (
	"id" serial PRIMARY KEY NOT NULL,
	"role" text NOT NULL,
	"duration" text NOT NULL,
	"company_name" text NOT NULL,
	"company_url" text,
	"company_description" text NOT NULL,
	"bullets" jsonb NOT NULL,
	"order" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "projects" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"description" text NOT NULL,
	"tag" text NOT NULL,
	"live_url" text,
	"repo_url" text,
	"order" integer DEFAULT 0,
	"created_at" timestamp DEFAULT now()
);
