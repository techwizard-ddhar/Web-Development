export default {
	async fetch(request, env, ctx): Promise<Response> {
		return Response.json({
			msg:"Hello cloudflare !!"
		});
	},
} satisfies ExportedHandler<Env>;
