import { Author, Comment, db } from "astro:db";

export default async function () {
	await db.insert(Author).values([
		{ id: 1, name: "John Doe" },
		{ id: 2, name: "Jane Smith" },
	]);
	await db.insert(Comment).values([
		{ authorId: 1, content: "Hope you like Astro DB!" },
		{ authorId: 2, content: "Enjoy!" },
	]);
}
