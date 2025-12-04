# Notes – Home Page Glow Mock v01

## Assumptions

1. **Theme tokens v02** are the authoritative source for colours, spacing and elevations. The mockup uses the glow colours and elevation layers defined there. The fonts used are DejaVu Sans as placeholders; Codex should replace them with the actual typefaces specified in the design system.
2. The product set features Atlas‑V, AtlasStudio and Octopus in Action. Future products such as Decision Console or AtlasWave are not included on the homepage yet.
3. We assume the site will support modern CSS techniques (flexbox/grid, gradients and shadows) and that SVG glow orbs can be loaded as background images or drawn using CSS. The mock uses static PNGs purely for demonstration.
4. The tagline “Systems with Soul” and the description “Tools and worlds in harmony” are placeholder copy from Run 3. These can be replaced with final marketing copy once approved.
5. We intentionally kept the layout simple (hero → product showcase → footer) because the home page should introduce the brand without overwhelming the user. Additional sections (e.g. about, blog) can be added below the footer in future iterations.

## Design considerations

* **Cinematic polish:** The glow effects are deliberately soft and diffused, avoiding harsh neon edges. This was inspired by the description of AtlasForge’s magenta energy core and orbit lines【923854715267635†L17-L49】. It conveys depth and motion without being distracting.
* **Hierarchy through light:** Bright areas (hero text, product cards) draw attention because they sit on dark backgrounds and are backed by subtle glow halos. This helps guide the user’s eye down the page.
* **Colour balance:** The hero border transitions through magenta, cyan and purple to tie back to the brand palette. Product cards use their own accent colours while still harmonising with the overall scheme.
* **Scalability:** The mobile mockup demonstrates how the same aesthetic can translate to smaller screens: stacking elements, resizing glows and adjusting typography. Future breakpoints (e.g. tablet) can interpolate between these two extremes.

## Further improvements

* **Animation potential:** The static images could be enhanced in the future with subtle animations—slowly drifting glow spheres, pulsing halo bars or a shimmering CTA button. These effects should be understated to maintain a premium look.
* **Hero imagery:** The hero section could incorporate a faint abstract illustration or motion graphic behind the glow panel to further evoke AtlasForge’s creative universe.
* **More call‑outs:** Additional micro‑interactions (e.g. hover states on product cards) can reinforce the polished feel.
* **Accessibility:** Ensure sufficient colour contrast between text and background. Provide focus states for interactive elements and consider user preferences for reduced motion.
