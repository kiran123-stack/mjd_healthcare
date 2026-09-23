# DESIGN.md
# MJD Healthcare — Human-Led Digital Design System

VERSION: 1.0

This document is the primary design authority for the website.

The AI/agent is an IMPLEMENTER, not the creative director.

The agent must NOT invent visual patterns simply because they are common
in AI-generated websites.

Every visual decision must have a reason.

==================================================
01 — DESIGN PHILOSOPHY
==================================================

MJD Healthcare is a B2B healthcare consulting and growth company.

The website must communicate:

- strategic intelligence
- healthcare expertise
- commercial credibility
- institutional trust
- clarity
- maturity
- precision
- confidence

The website must feel like a serious international consultancy.

It must NOT feel like:

- an AI startup landing page
- a SaaS template
- a Web3 website
- a design agency template
- a generic healthcare template
- a startup pitch deck
- an AI-generated portfolio

PRIMARY PRINCIPLE:

Design the information first.
Design the interface second.
Decorate only when decoration has a communication purpose.


==================================================
02 — DESIGN RESEARCH FOUNDATION
==================================================

Use established UX principles as the foundation:

- visual hierarchy
- scale
- balance
- contrast
- Gestalt principles
- proximity
- similarity
- continuation
- figure/ground
- whitespace
- consistency
- recognition over recall
- visibility of system status
- user control
- error prevention
- accessibility
- responsive design

Do not invent UX rules.

Use proven interaction patterns unless there is a strong reason
to create a custom interaction.


==================================================
03 — HUMAN DESIGN TEST
==================================================

Before creating ANY section, answer internally:

1. What is the user's goal on this section?
2. What is the business goal?
3. What information is most important?
4. What should the user notice first?
5. What should the user understand second?
6. What should the user do next?
7. Why does this layout communicate that hierarchy?

If these questions cannot be answered:

DO NOT DESIGN THE SECTION YET.


==================================================
04 — VISUAL HIERARCHY
==================================================

Every page must have a deliberate visual hierarchy.

Priority:

1. Page purpose
2. Main message
3. Primary action
4. Supporting information
5. Secondary actions
6. Supporting details

Do NOT make everything visually important.

If everything is large, bold, colorful or animated,
nothing is important.

Use differences in:

- size
- weight
- spacing
- position
- contrast
- color

to establish hierarchy.


==================================================
05 — LAYOUT SYSTEM
==================================================

Use a structured responsive grid.

Desktop:

12-column grid.

Use:

- consistent max-width
- meaningful margins
- consistent gutters
- intentional alignment

Content must align to the grid.

Do NOT randomly center elements.

Do NOT randomly offset elements merely to make the design
"look creative."

Asymmetry is allowed ONLY when it improves hierarchy,
composition or storytelling.

Every offset must have a reason.


==================================================
06 — SPACING
==================================================

Use a consistent spacing rhythm.

Preferred base system:

8px

Use multiples such as:

8
16
24
32
40
48
64
80
96
120

Do not randomly use dozens of unrelated spacing values.

Large spacing should separate major ideas.

Small spacing should group related information.

Whitespace is a structural element.


==================================================
07 — TYPOGRAPHY
==================================================

Typography must communicate hierarchy.

Use a restrained type scale.

Recommended hierarchy:

Display
H1
H2
H3
Body
Small supporting text
Metadata

Do not create enormous headings simply because large typography
looks impressive.

Avoid:

- gradient text
- outlined text
- excessive bold text
- excessive uppercase text
- decorative typography

Body text must remain comfortable to read.

Long paragraphs should use controlled line length.

Typography should feel editorial and professional.


==================================================
08 — COLOR
==================================================

MJD should use a restrained corporate healthcare palette.

Primary:

deep navy / charcoal

Background:

white / warm off-white

Accent:

MJD blue

Supporting colors:

cool neutral grays

Accent colors should communicate meaning.

Do not use color everywhere.

Do not use gradients as decoration.

Do not use:

- purple AI gradients
- neon blue
- glowing cyan
- rainbow gradients
- excessive colored backgrounds


==================================================
09 — SHAPE LANGUAGE
==================================================

Avoid the "everything is a rounded card" problem.

Not every element should have:

rounded-3xl
rounded-2xl
pill shapes
floating shadows

Use a mixture of:

- square/near-square containers
- subtle radius
- thin borders
- open layouts
- editorial blocks
- horizontal rules
- image frames

Corner radius must communicate hierarchy.

Large radius should be reserved for elements that genuinely
benefit from it.


==================================================
10 — CARDS
==================================================

Cards are a functional pattern, not a default design pattern.

DO NOT automatically create:

ICON
TITLE
DESCRIPTION
BUTTON

inside repeated cards.

Before using cards ask:

"Does a card improve information grouping?"

If NO:

use another structure.

Possible alternatives:

- editorial list
- numbered navigation
- horizontal rows
- split layout
- accordion
- tabs
- comparison
- timeline
- interactive selector
- diagram
- large feature block


==================================================
11 — INFORMATION ARCHITECTURE
==================================================

Do not design sections independently.

The entire page must tell a coherent story.

Every section should answer one question.

Example:

Hero:
What is this page about?

Introduction:
Why does this matter?

Services:
What does MJD actually provide?

Framework:
How are the services connected?

Business needs:
Which solution is relevant to me?

CTA:
What should I do next?


==================================================
12 — INTERACTION DESIGN
==================================================

Interaction must have PURPOSE.

Good interaction:

- selecting a business challenge
- revealing related services
- changing information context
- expanding a framework
- exploring relationships
- filtering information
- progressive disclosure
- meaningful hover states
- subtle scroll-based transitions

Bad interaction:

- random floating objects
- spinning cards
- bouncing cards
- excessive parallax
- mouse-following effects everywhere
- unnecessary 3D
- animated gradients
- excessive reveal animations
- animations simply because they are possible

If removing an animation does not reduce usability
or understanding:

REMOVE IT.


==================================================
13 — MOTION
==================================================

Motion must communicate:

- state change
- hierarchy
- continuity
- spatial relationship
- feedback

Preferred duration:

150–300ms for normal UI interactions.

Use slower transitions only for meaningful spatial changes.

Avoid:

- dramatic entrance animations
- excessive stagger animations
- bouncing
- elastic effects
- continuous floating
- infinite decorative motion


==================================================
14 — IMAGES
==================================================

Images must support the message.

Do NOT use generic healthcare stock imagery.

Avoid:

- doctor smiling at laptop
- doctor holding clipboard
- handshake in hospital
- random hospital corridor
- stethoscope close-up
- generic medical cross
- generic AI brain
- random healthcare worker

Prefer imagery related to:

- healthcare infrastructure
- medical technology
- diagnostics
- medical devices
- healthcare leadership
- corporate environments
- healthcare operations
- commercial environments
- research environments
- modern architecture

Images should feel editorial and intentional.


==================================================
15 — ICONS
==================================================

Icons should communicate information.

Use one consistent icon family.

Do not put an icon inside every card simply because
there is empty space.

If an icon does not improve comprehension:

REMOVE IT.



==================================================
15 — IMAGE SOURCING & VISUAL DIRECTION
==================================================

Images are an important part of the visual identity.

Do NOT use images simply to fill empty space.

Every image must support the meaning of the section.

--------------------------------------------------
IMAGE SOURCE PRIORITY
--------------------------------------------------

Use this priority order:

1. Existing approved project images
2. Relevant Unsplash photography
3. Generated custom image when a suitable real photograph
   cannot be found

--------------------------------------------------
UNSPLASH SEARCH
--------------------------------------------------

When an image is needed, search for the ACTUAL VISUAL CONCEPT,
not generic industry keywords.

BAD:

"healthcare"
"doctor"
"hospital"

GOOD:

"medical device manufacturing facility"
"healthcare executive meeting modern office"
"diagnostic laboratory technology"
"medical equipment engineering"
"healthcare business strategy meeting"
"modern medical research facility"
"hospital infrastructure architecture"
"medical technology close up"

Search for photography that matches:

- composition
- lighting
- subject
- color temperature
- architectural quality
- visual sophistication
- intended crop
- section purpose

Do not select the first acceptable image.

Evaluate at least several candidates before selecting one.

--------------------------------------------------
IMAGE QUALITY
--------------------------------------------------

Prefer:

- editorial photography
- cinematic but realistic photography
- sophisticated corporate environments
- architectural photography
- medical technology
- real equipment
- real workplaces
- natural lighting
- restrained colors
- authentic environments

Avoid:

- obvious stock photography
- posed doctor portraits
- fake smiles
- handshake clichés
- generic hospital corridors
- stethoscope clichés
- random medical icons
- generic AI healthcare imagery
- overly futuristic CGI
- images with obvious logos
- images that look like advertisements

--------------------------------------------------
IMAGE + LAYOUT
--------------------------------------------------

Do not automatically place an image beside text.

The image composition must be considered together with the layout.

Possible treatments:

- full-bleed editorial image
- cropped architectural image
- image inside a controlled frame
- large asymmetric visual
- narrow image strip
- background image with readable overlay
- image used as a visual anchor

The image should have a clear relationship with the content.

--------------------------------------------------
IMAGE MATCHING
--------------------------------------------------

Before selecting an image ask:

1. What does this section communicate?
2. What should the image communicate?
3. Does the image reinforce that message?
4. Does its composition work with the intended crop?
5. Does its color palette work with the page?
6. Does it make the website feel more credible?

If the answer is NO:

DO NOT USE THE IMAGE.

--------------------------------------------------
GENERATED IMAGES
--------------------------------------------------

If no suitable real photograph can be found:

Generate a custom image.

Generated images must look:

- realistic
- editorial
- premium
- corporate
- restrained
- believable
- contextually relevant

Do NOT generate:

- futuristic AI healthcare scenes
- glowing holograms
- floating medical objects
- blue neon technology
- fake dashboards
- unrealistic doctors
- impossible medical equipment
- generic "AI healthcare" imagery

The generated image must feel like professional commercial
photography rather than an AI illustration.

--------------------------------------------------
CONSISTENCY
--------------------------------------------------

Images across the website should feel like they belong
to the same visual world.

Maintain consistency in:

- lighting
- realism
- color temperature
- photography style
- crop style
- sophistication

Do not mix:

one cinematic photograph
+
one generic stock photo
+
one 3D illustration
+
one AI-generated futuristic image

unless there is a deliberate design reason.

--------------------------------------------------
IMAGE ACCESSIBILITY
--------------------------------------------------

Every meaningful image must have useful alt text.

Decorative images must use appropriate decorative treatment.

--------------------------------------------------
IMPORTANT
--------------------------------------------------

Images must NEVER be used as decoration just because
a section looks empty.

A strong layout without an image is better than a weak
layout with an irrelevant image.

==================================================
16 — SECTION VARIETY
==================================================

Do NOT use the same layout repeatedly.

Example:

Section 1:
large editorial hero

Section 2:
asymmetric text + visual

Section 3:
interactive service navigation

Section 4:
horizontal framework

Section 5:
business-needs selector

Section 6:
CTA

This creates visual rhythm.

However:

DO NOT create variety merely for novelty.

Every layout must serve the content.


==================================================
17 — RESPONSIVE DESIGN
==================================================

Desktop design must not simply be scaled down.

For mobile:

- rethink hierarchy
- reorder content where necessary
- simplify interactions
- preserve readable typography
- preserve touch targets
- prevent horizontal overflow
- maintain meaningful spacing

Interactive controls must be comfortably usable.

Do not sacrifice usability for visual fidelity.


==================================================
18 — ACCESSIBILITY
==================================================

Maintain:

- readable contrast
- visible focus states
- keyboard accessibility
- semantic HTML
- meaningful labels
- usable touch targets
- reduced-motion consideration

Do not rely on color alone to communicate meaning.


==================================================
19 — AI-SLOP PROHIBITION
==================================================

ABSOLUTELY AVOID:

- gradient backgrounds
- glassmorphism everywhere
- floating blobs
- glowing borders
- excessive rounded cards
- generic dashboard layouts
- repetitive card grids
- random 3D objects
- fake statistics
- decorative badges
- excessive pills
- gradient typography
- giant centered hero text
- excessive whitespace with no information
- excessive whitespace used only to imitate luxury websites
- generic stock photography
- meaningless animations
- excessive shadows
- random illustrations
- "AI-looking" abstract graphics

DO NOT ADD DESIGN ELEMENTS JUST TO MAKE THE PAGE LOOK
MORE IMPRESSIVE.


==================================================
20 — CONTENT FIRST
==================================================

Never invent business claims.

Use the provided MJD content.

Do not rewrite strategic positioning without permission.

Do not create:

- fake statistics
- fake clients
- fake testimonials
- fake awards
- fake certifications
- fake case studies
- fake metrics


==================================================
21 — DESIGN REFERENCES
==================================================

Use established design systems and UX principles for fundamentals.

Useful references include:

- Nielsen Norman Group
- IBM Carbon Design System
- Material Design
- established editorial web design patterns
- professional B2B consulting websites

These references are for PRINCIPLES.

Do not copy their visual identity.

Do not copy their pages.


==================================================
22 — STITCH MCP
==================================================

Stitch is a DESIGN TOOL, not a decoration generator.

When Stitch MCP is available:

FIRST use it to explore the visual composition.

The agent must inspect:

- layout
- hierarchy
- spacing
- typography
- image placement
- interaction
- responsive behavior

Then implement the approved direction.

Do NOT blindly accept the first Stitch output.

Evaluate it against this DESIGN.md.


==================================================
23 — DESIGN APPROVAL WORKFLOW
==================================================

CRITICAL RULE:

BUILD ONLY ONE PAGE AT A TIME.

Never automatically build the entire Services section.

Workflow:

STEP 1
Study the project.

STEP 2
Study DESIGN.md.

STEP 3
Study the supplied MJD content.

STEP 4
Study existing components and design system.

STEP 5
Use Stitch MCP to explore ONE PAGE.

STEP 6
Create ONE page.

STEP 7
STOP.

STEP 8
Wait for human approval.

STEP 9
Only after approval continue to the next page.

Never assume approval.

Never automatically continue.

==================================================
24 — IMPLEMENTATION DISCIPLINE
==================================================

Do not rewrite the entire project.

Do not change unrelated pages.

Do not change global styles unless necessary.

Do not introduce unnecessary libraries.

Reuse existing components where appropriate.

Keep code maintainable.

Separate:

- content
- layout
- interaction
- styling

Do not create enormous components.


==================================================
25 — FINAL DESIGN QUALITY TEST
==================================================

Before presenting a page, inspect it at:

Desktop
Tablet
Mobile

Ask:

1. Is the primary message obvious?
2. Is the visual hierarchy obvious?
3. Is the page easy to scan?
4. Does the layout feel intentional?
5. Is there unnecessary decoration?
6. Are components being repeated unnecessarily?
7. Does the page look like a template?
8. Does every interaction have a purpose?
9. Does every image support the content?
10. Does the page feel credible for a healthcare consultancy?
11. Does anything look obviously AI-generated?
12. Can any element be removed without hurting the experience?

If yes:

REMOVE IT.

==================================================
26 — MOST IMPORTANT RULE
==================================================

DO NOT OPTIMIZE FOR:

"Wow, look how much design AI generated."

OPTIMIZE FOR:

"Everything on this page appears intentional."

Clarity > decoration.

Hierarchy > effects.

Purpose > novelty.

Content > components.

Human judgment > AI defaults.

The AI is the implementation engine.

The design system is the authority.

The human approves every page before the next page is created.