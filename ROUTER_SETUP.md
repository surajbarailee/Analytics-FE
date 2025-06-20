# React Router Setup

This project uses React Router v7 for client-side routing. Here's how it's configured and how to use it.

## Setup Overview

### 1. Installation

React Router DOM is already installed in this project:

```bash
npm install react-router-dom
```

### 2. Main Configuration

#### `src/main.tsx`

The app is wrapped with `BrowserRouter` to enable routing:

```tsx
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
```

#### `src/App.tsx`

Routes are defined using `Routes` and `Route` components:

```tsx
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/engineers/create" element={<CreateEngineerPage />} />
        {/* More routes... */}
      </Routes>
    </Layout>
  );
}
```

## Available Routes

- `/` - Dashboard (home page)
- `/dashboard` - Dashboard
- `/engineers` - Engineers overview
- `/engineers/all` - All engineers list
- `/engineers/create` - Create new engineer
- `/repositories` - Repositories overview
- `/repositories/all` - All repositories
- `/repositories/favorites` - Favorite repositories
- `/team` - Team overview
- `/team/members` - Team members
- `/team/activity` - Team activity
- `/settings` - Settings

## Navigation

### Using Link Component

For navigation links, use the `Link` component instead of `<a>` tags:

```tsx
import { Link } from "react-router-dom";

<Link to="/engineers/create">Create Engineer</Link>;
```

### Using useNavigate Hook

For programmatic navigation (e.g., after form submission):

```tsx
import { useNavigate } from "react-router-dom";

function MyComponent() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Save data...
    navigate("/engineers/all"); // Navigate to engineers list
  };
}
```

### Using useLocation Hook

To get current location information:

```tsx
import { useLocation } from "react-router-dom";

function MyComponent() {
  const location = useLocation();
  console.log("Current path:", location.pathname);
}
```

## Sidebar Navigation

The sidebar navigation (`src/components/nav-main.tsx`) has been updated to use React Router:

- Uses `Link` components instead of anchor tags
- Automatically highlights active routes using `useLocation`
- Supports nested navigation items

## Adding New Routes

1. Create your component in the appropriate directory
2. Add the route to `src/App.tsx`:

```tsx
<Route path="/your-new-path" element={<YourComponent />} />
```

3. Add navigation item to `src/components/app-sidebar.tsx` if needed

## Best Practices

1. **Use Link for navigation**: Always use `Link` instead of `<a>` tags for internal navigation
2. **Use useNavigate for programmatic navigation**: Use this hook for navigation after form submissions, API calls, etc.
3. **Keep routes organized**: Group related routes together in your `App.tsx`
4. **Use meaningful paths**: Use descriptive, RESTful paths for your routes
5. **Handle 404s**: Consider adding a catch-all route for unmatched paths

## Example Usage

See `src/components/engineers/create-engineer.tsx` for a complete example of:

- Using `useNavigate` for form submission
- Navigation between routes
- Form handling with React Router
