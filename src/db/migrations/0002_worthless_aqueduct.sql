CREATE TABLE "cv_certifications" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"issuer" text NOT NULL,
	"year" text NOT NULL,
	"url" text,
	"order" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "cv_education" (
	"id" serial PRIMARY KEY NOT NULL,
	"degree" text NOT NULL,
	"institution" text NOT NULL,
	"year" text NOT NULL,
	"description" text,
	"order" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "cv_referees" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"title" text NOT NULL,
	"company" text NOT NULL,
	"email" text NOT NULL,
	"phone" text,
	"order" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "cv_skills" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"category" text,
	"order" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "cv_strengths" (
	"id" serial PRIMARY KEY NOT NULL,
	"title" text NOT NULL,
	"proof" text NOT NULL,
	"order" integer DEFAULT 0
);
--> statement-breakpoint
CREATE TABLE "cv_summary" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" text NOT NULL
);
