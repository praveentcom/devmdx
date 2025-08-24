# Motion Primitives Integration

This project now includes **motion primitives** from [motion-primitives.com](https://motion-primitives.com) to create beautiful blur-in animations that trigger on scroll.

## What's Been Added

### 🎨 Components Installed
- **InView**: Triggers animations when elements enter the viewport
- **ProgressiveBlur**: Creates layered blur effects with gradient masks
- **BlurIn**: Custom component combining InView with blur + opacity + slide animations

### 🚀 Animations Implemented

All major sections now feature smooth blur-in animations on scroll:

#### Homepage (`/`)
- **AboutSection**: Blurs in with 0.1s delay
- **ArticlesSection**: Section blurs in at 0.2s, individual articles stagger from 0.3s
- **CommunitySection**: Section blurs in at 0.4s, individual cards stagger from 0.5s

#### Bio Page (`/bio`)
- **WorkExperienceSection**: Section blurs in at 0.1s, individual cards stagger from 0.2s
- **EducationSection**: Section blurs in at 0.3s, individual cards stagger from 0.4s
- **ProjectsSection**: Section blurs in at 0.5s, individual projects stagger from 0.6s

### 🎯 Animation Details

Each `BlurIn` component includes:
- **Opacity**: Fades from 0 to 1
- **Blur**: Starts with 6px blur, transitions to 0px (crystal clear)
- **Y-offset**: Elements slide up 20px as they appear
- **Easing**: Smooth "easeOut" transition
- **Threshold**: Triggers when 10% of element is visible
- **Once**: Animations only play once (no re-triggering on scroll)

## Usage Examples

### Basic BlurIn Component
```jsx
import { BlurIn } from '@/components/motion-primitives/blur-in';

<BlurIn delay={0.2} duration={0.8}>
  <YourComponent />
</BlurIn>
```

### Staggered Animations
```jsx
{items.map((item, index) => (
  <BlurIn key={index} delay={0.1 + index * 0.1} duration={0.6}>
    <ItemComponent item={item} />
  </BlurIn>
))}
```

### Custom Configuration
```jsx
<BlurIn 
  delay={0.5}
  duration={1.2}
  blur="10px"
  yOffset={30}
  once={false}
>
  <YourComponent />
</BlurIn>
```

### Direct InView Usage
```jsx
import { InView } from '@/components/motion-primitives/in-view';

<InView
  variants={{
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewOptions={{ threshold: 0.3 }}
>
  <YourComponent />
</InView>
```

### Progressive Blur Effect
```jsx
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur';

<ProgressiveBlur 
  direction="top" 
  blurLayers={8} 
  blurIntensity={0.25}
>
  <YourContent />
</ProgressiveBlur>
```

## Dependencies Added

- **motion**: Core animation library (replaces framer-motion for better performance)
- **motion-primitives**: Pre-built animation components

## File Structure

```
src/components/motion-primitives/
├── in-view.tsx          # Viewport-triggered animations
├── progressive-blur.tsx # Layered blur effects
├── blur-in.tsx         # Custom blur-in component
└── index.ts            # Barrel exports
```

## Performance Notes

- Animations use `once={true}` by default to prevent re-triggering
- Threshold set to 10% for early activation
- Smooth easing curves for natural motion
- Optimized for 60fps performance

## Customization

You can easily customize the animations by:

1. **Adjusting delays**: Create different timing patterns
2. **Modifying duration**: Speed up or slow down animations  
3. **Changing blur intensity**: Increase/decrease the blur effect
4. **Custom variants**: Create your own animation patterns
5. **Viewport options**: Adjust when animations trigger

The motion primitives are now fully integrated and will create a polished, modern user experience with smooth scroll-triggered animations throughout the site! 🎉