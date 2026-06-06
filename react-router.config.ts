import type { Config } from '@react-router/dev/config';

export default {
	appDirectory: './src/app',
	ssr: false,
	buildDirectory: './build',
	assetsBuildDirectory: './build/client',
	ignoredRouteFiles: ['**/\.', '**/*.test.*', '**/__*', '**/.*'],
} satisfies Config;
