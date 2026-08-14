FIGMA DESIGN SPECIFICATION
Hero Section — "Performance Marketing" Landing Page
============================================================

FRAME
------------------------------------------------------------
Name: Hero / Trusted-Brands Section
Size: 1536 x 1024 px
Background: Linear gradient, top-left to bottom-right
  Stop 1: #F7F9FC (0%)
  Stop 2: #EEF2FA (100%)
Overflow: Hidden (decorative circles bleed off edges)

------------------------------------------------------------
LAYOUT GRID
------------------------------------------------------------
Columns: 12
Margin (L/R): 64 px
Gutter: 24 px
Content max-width: 1408 px
Vertical rhythm baseline: 8 px

------------------------------------------------------------
DECORATIVE BACKGROUND ELEMENTS
------------------------------------------------------------
1. Dot Grid — Top Left
   Position: x:64, y:56
   Size: 130 x 130 px
   Pattern: 5 x 5 dots, 26px spacing
   Dot size: 4 x 4 px, Radius: 50%
   Color: #C7D2E8 (opacity 70%)

2. Dot Grid — Bottom Right
   Position: x:1372, y:876
   Size: 130 x 130 px
   Pattern: 5 x 5 dots, 26px spacing
   Dot size: 4 x 4 px, Radius: 50%
   Color: #C7D2E8 (opacity 70%)

3. Circle Blob — Top Right
   Position: x:1300, y:-80 (bleeds off top edge)
   Size: 340 x 340 px, Radius: 50%
   Fill: #DCE6FA (opacity 60%)

4. Circle Blob — Bottom Left
   Position: x:-90, y:900 (bleeds off bottom edge)
   Size: 260 x 260 px, Radius: 50%
   Fill: #DCE6FA (opacity 60%)

------------------------------------------------------------
COMPONENT: Trust Badge (Pill)
------------------------------------------------------------
Position: Centered horizontally, y:118
Size: Auto-width (≈434 px) x 60 px
Padding: 14px 32px 14px 14px
Background: #FFFFFF
Border radius: 32 px (full pill)
Shadow: 0px 8px 24px rgba(20, 40, 90, 0.08)
Layout: Horizontal auto-layout, gap 12px, align center

  Sub-element: Icon Container
    Size: 32 x 32 px
    Background: Linear gradient #2149E8 → #3D5CFF (135deg)
    Border radius: 10 px
    Icon: Shield-check, 16x16, Color #FFFFFF, stroke weight 2

  Sub-element: Label Text
    Content: "TRUSTED BY GLOBAL BRANDS"
    Font: Inter / Poppins, SemiBold (600)
    Size: 14 px
    Letter spacing: 1 px (uppercase tracking)
    Color: #0F1E4D
    Text-transform: Uppercase

------------------------------------------------------------
COMPONENT: Headline Block
------------------------------------------------------------
Position: Centered horizontally, y:222
Width: 900 px (constrained, centered)
Text align: Center
Line height: 122%

  Line 1–3 (Regular headline):
    Content: "Helping businesses generate high-quality leads and
              maximize return on investment through"
    Font: Poppins / Inter, Bold (700)
    Size: 48 px
    Color: #0B1739 (near-black navy)

  Line 4 (Script accent, inline continuation):
    Content: "performance marketing."
    Font: Script/Handwritten face (e.g., "Caveat" or "Homemade Apple"), Regular (400)
    Size: 52 px
    Color: #2A4CE8 (accent blue)
    Style: Italic script

  Underline Swash (decorative SVG stroke)
    Position: Below script line, x:centered, y:+16 from text baseline
    Size: ≈320 x 24 px
    Stroke: #2A4CE8, weight 4px, cap round, wavy path

Gap between badge and headline: 44 px

------------------------------------------------------------
COMPONENT: Left 3D Illustration — Target/Dart
------------------------------------------------------------
Position: x:64, y:340 (vertically centered against headline)
Size: 340 x 340 px (bounding box)
Asset type: 3D rendered PNG/illustration, isometric tilt (~15°)
Elements: White outer ring, blue mid ring (#2149E8), white inner ring,
          blue dart shaft with blue fletching, embedded at center
Shadow: Soft ambient drop shadow beneath, blur 40px, opacity 15%

------------------------------------------------------------
COMPONENT: Right 3D Illustration — Bar Chart
------------------------------------------------------------
Position: x:1170, y:346 (right-aligned within margin)
Size: 320 x 300 px (bounding box)
Asset type: 3D rendered PNG/illustration
Elements: White rounded base platform (rect, radius 16px),
          3 vertical bars in ascending height:
            Bar 1: 70 x 110 px
            Bar 2: 70 x 150 px
            Bar 3: 70 x 200 px
          Bar color: Gradient #1E3FE0 → #3D5CFF, radius 12px top corners
Shadow: Soft ambient drop shadow beneath, blur 40px, opacity 15%

------------------------------------------------------------
COMPONENT: Logo Strip (Auto-layout Row)
------------------------------------------------------------
Position: y:726, horizontal centered within margins (64–1472)
Width: 1408 px (fills content area)
Layout: Horizontal auto-layout, space-between (7 items)
Item gap: 16 px
Item count: 7

  Card (repeat x7):
    Size: ~184 x 88 px (flexible/fill)
    Background: #FFFFFF
    Border radius: 16 px
    Shadow: 0px 4px 16px rgba(20, 40, 90, 0.06)
    Padding: 20px 24px
    Layout: Horizontal auto-layout, gap 12px, align center

    Sub-element: Logo Mark
      Size: 40 x 40 px
      Background: Linear gradient #2149E8 → #3D5CFF (135deg)
      Border radius: 10 px
      Content: 2-letter monogram, centered
      Font: Inter Bold, 15px, Color #FFFFFF

    Sub-element: Brand Name
      Font: Inter, SemiBold (600)
      Size: 17 px
      Color: #0B1739

  Items (label / monogram):
    1. SH — Shopify
    2. SF — Salesforce
    3. HS — HubSpot
    4. ST — Stripe
    5. TW — Twilio
    6. ZD — Zendesk
    7. MC — Mailchimp
    8. SG — Segment
    (Note: 8 cards present — adjust grid to 8 columns, gap 16px,
     equal width ~166px each)

------------------------------------------------------------
COLOR STYLES
------------------------------------------------------------
Primary/Navy-900     #0B1739   (headline text)
Primary/Navy-800     #0F1E4D   (badge label text)
Primary/Blue-600     #2149E8   (icon gradient start / accent)
Primary/Blue-500     #3D5CFF   (icon gradient end)
Primary/Blue-Script  #2A4CE8   (script accent text/underline)
Background/Base      #F7F9FC
Background/Alt       #EEF2FA
Surface/White        #FFFFFF
Decorative/Dot       #C7D2E8
Decorative/Blob      #DCE6FA
Shadow/Card           rgba(20,40,90,0.06)
Shadow/Badge          rgba(20,40,90,0.08)

------------------------------------------------------------
TYPOGRAPHY STYLES
------------------------------------------------------------
Badge Label:     Inter SemiBold / 14 / 1px tracking / Uppercase
Headline Bold:   Poppins Bold / 48 / 122% line-height
Headline Script: Caveat Regular / 52 / italic
Logo Brand Name: Inter SemiBold / 17
Logo Monogram:   Inter Bold / 15

------------------------------------------------------------
EFFECT STYLES
------------------------------------------------------------
Shadow/Soft-Card:  X0 Y4 Blur16 Spread0 rgba(20,40,90,0.06)
Shadow/Badge-Float: X0 Y8 Blur24 Spread0 rgba(20,40,90,0.08)
Shadow/3D-Ambient: X0 Y20 Blur40 Spread0 rgba(20,40,90,0.15)

------------------------------------------------------------
COMPONENT HIERARCHY (Layer Tree)
------------------------------------------------------------
Hero Section (Frame 1536x1024)
├── Background Group
│   ├── Gradient Fill
│   ├── Dot Grid Top Left
│   ├── Dot Grid Bottom Right
│   ├── Blob Top Right
│   └── Blob Bottom Left
├── Content Stack (Auto-layout, Vertical, gap 44, centered)
│   ├── Trust Badge (pill)
│   │   ├── Icon Container
│   │   └── Label Text
│   ├── Headline Group
│   │   ├── Headline Bold (3 lines)
│   │   ├── Headline Script (1 line)
│   │   └── Underline Swash (vector)
│   └── (illustrations sit outside vertical stack, absolutely positioned)
├── Illustration Left (Target/Dart, absolute)
├── Illustration Right (Bar Chart, absolute)
└── Logo Strip (Auto-layout, Horizontal, gap 16, space-between)
    ├── Logo Card x8
    │   ├── Logo Mark (monogram)
    │   └── Brand Name