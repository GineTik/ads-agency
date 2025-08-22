# Ads Agency Monorepo

A modern monorepo for the Ads Agency project built with pnpm workspaces.

## 🏗️ Architecture

This project follows a monorepo structure with the following apps and packages:

- **`apps/frontend`** - Next.js 15 frontend application with TinaCMS

## 🚀 Getting Started

### Prerequisites

- Node.js 18.18.0+ (use `nvm use` to switch to the correct version)
- pnpm 8.0.0+

### Installation

1. Install dependencies for all packages:

```bash
pnpm install
```

2. Start the development server:

```bash
pnpm dev
```

## 📜 Available Scripts

### Root Level Commands

- `pnpm dev` - Start development server for frontend
- `pnpm build` - Build the frontend application
- `pnpm start` - Start the production server
- `pnpm lint` - Run linting for frontend
- `pnpm clean` - Remove all node_modules, dist, and .next directories
- `pnpm type-check` - Run TypeScript type checking across all packages

### Working with Specific Apps

You can run commands for specific apps using pnpm filters:

```bash
# Run dev for frontend only
pnpm --filter frontend dev

# Install a dependency to frontend
pnpm --filter frontend add package-name

# Run any script in frontend
pnpm --filter frontend run script-name
```

## 🏢 Project Structure

```
ads-agency/
├── apps/
│   └── frontend/          # Next.js frontend application
│       ├── src/
│       │   ├── app/       # Next.js App Router
│       │   ├── features/  # Feature-specific components
│       │   └── shared/    # Shared utilities and components
│       ├── tina/          # TinaCMS configuration
│       └── package.json
├── packages/              # Shared packages (future)
├── package.json           # Root package.json
├── pnpm-workspace.yaml    # pnpm workspace configuration
└── pnpm-lock.yaml         # Lockfile for all dependencies
```

## 🛠️ Development

### Adding New Apps

To add a new app to the monorepo:

1. Create a new directory in `apps/`
2. Initialize with `pnpm init`
3. The workspace configuration will automatically include it

### Adding New Packages

To add shared packages:

1. Create a new directory in `packages/`
2. Initialize with `pnpm init`
3. Reference it from apps using the package name

### Managing Dependencies

- **Root dependencies**: Development tools, shared configs
- **App dependencies**: App-specific packages
- **Package dependencies**: Package-specific dependencies

```bash
# Add to root (for tooling)
pnpm add -w eslint

# Add to specific app
pnpm --filter frontend add react

# Add to specific package
pnpm --filter @company/ui add react
```

## 🔧 Configuration

- **pnpm**: Configured via `pnpm-workspace.yaml`
- **TypeScript**: Each app/package has its own `tsconfig.json`
- **Node Version**: Managed via `.nvmrc`

## 📦 Package Manager

This project uses [pnpm](https://pnpm.io/) for fast, efficient package management with workspace support.

### Why pnpm?

- **Fast**: Uses hard links and symlinks for efficient storage
- **Strict**: Prevents dependency hell with strict resolution
- **Workspace Support**: Built-in monorepo support
- **Disk Space**: Saves disk space with content-addressable storage

## 🤝 Contributing

1. Make sure you're using the correct Node.js version: `nvm use`
2. Install dependencies: `pnpm install`
3. Create your feature branch
4. Make your changes
5. Run tests and linting: `pnpm lint`
6. Submit a pull request
