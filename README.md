# Enhanced 3D Cube Documentation

## Overview
This repository contains two interactive 3D cube visualizations built with Three.js, each showcasing different features and interaction paradigms.

## Cube Implementations

### 1. Enhanced 3D Cube (`cube1.html`)

#### Features
- **Cyberpunk Aesthetic**: Dark theme with neon green wireframe cube (#00ff00)
- **Particle System**: 1000 animated particles creating an ambient background effect
  - Randomly distributed in 3D space
  - Synchronized rotation with the main cube
  - White particle material for contrast
- **Auto-rotation**: Continuous automatic rotation on both X and Y axes
- **Phong Material Lighting**: Realistic lighting using Three.js MeshPhongMaterial
- **Directional Lighting**: Single directional light source positioned at (5, 5, 5)
- **Wireframe Rendering**: Cube displayed as wireframe for a minimalist look

#### Technical Specifications
- **Three.js Version**: r128
- **Camera**: PerspectiveCamera with 75° FOV
- **Particle Count**: 1000
- **Rotation Speed**: 0.01 radians per frame on both axes
- **Renderer**: WebGLRenderer with full viewport dimensions

#### Visual Style
- Background: Dark blue-black (#0b0c10)
- Text Color: Cyan (#66fcf1)
- Font: 'Orbitron', sans-serif
- Cube Color: Neon green wireframe

### 2. Interactive Cube (`docs/cube1.html`)

#### Features
- **Mouse-Controlled Rotation**: Direct manipulation of cube orientation via drag
  - Click and drag to rotate the cube
  - Smooth, responsive rotation based on mouse movement
  - Sensitivity: 0.01 radians per pixel of mouse movement
- **Real-Time Position Display**: Live coordinate tracking
  - Displays current rotation on X, Y, and Z axes
  - Updates in real-time during interaction
  - Values displayed with 2 decimal precision
- **Material Design**: Modern PBR (Physically Based Rendering) materials
  - Metalness: 0.7
  - Roughness: 0.32
  - Dark base color with subtle emissive properties
- **Wireframe Edges**: Green edge highlighting (#98ffa7) using EdgesGeometry
- **Advanced Lighting Setup**:
  - Ambient light (0x888888, intensity 0.9)
  - Directional light (0xffffff, intensity 0.7) at position (2, 3, 2)
- **Responsive Design**: 
  - Canvas automatically adjusts to viewport size
  - Position display fixed at top with 40px height
  - Canvas fills remaining viewport height
- **OrbitControls Integration**: 
  - Includes OrbitControls (disabled by default)
  - Custom mouse controls implemented for direct cube rotation
  - Zoom disabled for consistent viewing experience

#### Technical Specifications
- **Three.js Version**: 0.152.2 (ES Modules via CDN)
- **Camera**: PerspectiveCamera with 70° FOV at position (2.7, 2.7, 2.7)
- **Material**: MeshStandardMaterial (PBR workflow)
- **Canvas Size**: Full viewport minus 40px for coordinate display
- **Import Maps**: Modern ES module loading for Three.js

#### Interaction Model
- **Mouse Down**: Initiates drag mode, captures initial position
- **Mouse Move**: Updates cube rotation based on delta movement
  - Horizontal movement → Y-axis rotation
  - Vertical movement → X-axis rotation
- **Mouse Up/Leave**: Exits drag mode

#### Visual Style
- Background: Very dark gray (#111)
- Coordinate Display: Bright green (#98ffa7)
- Font: Monospace for technical readability
- Cube: Dark with green wireframe edges

## Use Cases

### Enhanced 3D Cube (`cube1.html`)
Best suited for:
- Visual demonstrations requiring ambient particle effects
- Automatic presentations or screensavers
- Cyberpunk-themed projects
- Background visualizations

### Interactive Cube (`docs/cube1.html`)
Best suited for:
- Educational demonstrations of 3D rotation
- Interactive portfolio pieces
- User-controlled visualizations
- Debugging rotation values
- Technical demonstrations requiring precise control

## Browser Compatibility
Both implementations require a modern browser with:
- WebGL support
- ES6+ JavaScript support (for docs version)
- Canvas API support

## Installation & Usage
1. Clone the repository
2. Open the desired HTML file in a web browser
3. For the interactive version, click and drag to rotate the cube

## File Structure
```
/
├── cube1.html              # Enhanced cube with particles
└── docs/
    ├── cube1.html          # Interactive cube with controls
    └── index.html          # Main documentation page
```

## Future Enhancements
Potential improvements could include:
- Touch support for mobile devices
- Keyboard controls
- Adjustable rotation speed
- Color customization options
- Multiple cube instances
- VR/AR support
