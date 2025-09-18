# NammaMysuru - Tourism Application

A comprehensive React-based tourism application for Mysuru featuring interactive maps, events/festivals, itinerary planning, hotels/food recommendations, safety information, eco-travel options, and user contribution features.

## Features

- Interactive maps and attractions
- Events and festivals information
- Itinerary planning
- Hotels and food recommendations
- Safety information
- Eco-travel options
- User contribution features

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment on Render

This project is configured for easy deployment on Render using the included `render.yaml` file.

### Steps to Deploy:

1. **Push your code to GitHub** (if not already done)
   ```bash
   git add .
   git commit -m "Add Render deployment configuration"
   git push origin main
   ```

2. **Connect to Render:**
   - Go to [render.com](https://render.com) and sign up/login
   - Click "New +" and select "Web Service"
   - Connect your GitHub repository
   - Select this repository

3. **Configure the deployment:**
   - Render will automatically detect the `render.yaml` file
   - The configuration will set up:
     - Build Command: `npm ci && npm run build`
     - Publish Directory: `./dist`
     - Static site with SPA routing support

4. **Deploy:**
   - Click "Create Web Service"
   - Render will automatically build and deploy your application
   - You'll get a live URL like `https://your-app-name.onrender.com`

### Manual Configuration (Alternative)

If you prefer manual setup instead of using `render.yaml`:

- **Environment:** Static Site
- **Build Command:** `npm ci && npm run build`
- **Publish Directory:** `dist`
- **Rewrites and Redirects:** `/* /index.html` (for SPA routing)

### Environment Variables

No environment variables are required for the basic setup. If you add API integrations later, you can configure them in the Render dashboard under Environment Variables.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/       # Main application screens
├── assets/        # Static assets
├── App.jsx        # Main application component
└── main.jsx       # Application entry point
```
