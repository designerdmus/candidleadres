FIGMA DESIGN SPECIFICATION
Section — Final CTA "Join thousands of marketers driving measurable growth."
============================================================

FRAME
------------------------------------------------------------
Name: CTA / Final-Conversion Section
Size: 1536 x 1024 px
Background: Large rounded container
  Fill: #FFFFFF
  Border radius: 32 px
  Outer margin from viewport edge: 0 px (full-bleed container)
Overflow: Hidden (decorative blobs/dots clipped to rounded corners)

------------------------------------------------------------
LAYOUT GRID
------------------------------------------------------------
Columns: 2 (Left content column / Right illustration column)
Margin (L): 80 px
Margin (R): 80 px
Margin (T): 56 px
Margin (B): 56 px
Left column width: ≈ 950 px
Right column width: ≈ 420 px
Column gap: ≈ 90 px

------------------------------------------------------------
DECORATIVE BACKGROUND ELEMENTS
------------------------------------------------------------
1. Dot Grid — Top Right
   Position: x:1400, y:30
   Pattern: 5 x 4 dots, 24px spacing
   Dot size: 4 x 4 px, Radius: 50%
   Color: #C7D2E8 (opacity 55%)

2. Dot Grid — Bottom Left
   Position: x:24, y:864
   Pattern: 5 x 4 dots, 24px spacing
   Dot size: 4 x 4 px, Radius: 50%
   Color: #C7D2E8 (opacity 55%)

3. Radial Glow — Right/Mid
   Position: x:1050, y:0 (behind illustration, bleeds top edge)
   Size: 520 x 520 px, Radius: 50%
   Fill: #EAF0FE (opacity 70%), soft blur

4. Circle Blob — Bottom Right
   Position: x:1380, y:920 (bleeds bottom-right corner)
   Size: 300 x 300 px, Radius: 50%
   Fill: #EDF2FC (opacity 80%)

------------------------------------------------------------
LEFT CONTENT COLUMN (Auto-layout, Vertical)
------------------------------------------------------------
Position: x:80, y:80
Width: 950 px
Gap between children: 28 px
Align: left

COMPONENT: Top Badge (Pill)
  Size: Auto-width (≈390 px) x 44 px
  Padding: 12px 24px 12px 20px
  Background: #EAF0FE
  Border radius: 24 px (full pill)
  Layout: Horizontal auto-layout, gap 10px, align center

    Sub-element: Dot Indicator
      Size: 8 x 8 px
      Fill: #2149E8
      Radius: 50%

    Sub-element: Label Text
      Content: "READY TO SCALE YOUR BUSINESS?"
      Font: Inter/Manrope, Bold (700)
      Size: 14 px
      Letter spacing: 0.5 px
      Color: #2149E8
      Text-transform: Uppercase

COMPONENT: Heading Block
  Width: 900 px
  Line height: 108%
  Line 1: "Join thousands of marketers"
    Font: Manrope/Inter, ExtraBold (800)
    Size: 56 px
    Color: #0B1238
  Line 2: "driving " + "measurable growth."
    Font: Manrope/Inter, ExtraBold (800)
    Size: 56 px
    "driving " Color: #0B1238
    "measurable growth." Color: #2149E8

COMPONENT: Description Paragraph
  Width: 700 px
  Content: "Scale your affiliate program with a platform trusted by
            the world's top performance marketers."
  Font: Inter, Regular (400)
  Size: 19 px
  Line height: 152%
  Color: #5B6B8C
  Margin-top: 4 px

COMPONENT: Feature Grid (2x2)
  Position: margin-top 32 px
  Columns: 2, Gap: 20 px (horizontal), 20 px (vertical)
  Card width: ≈ 460 px, Card height: ≈ 148 px

  Card (repeat x4):
    Background: #FFFFFF
    Border: 1px solid #ECEFF6
    Border radius: 18 px
    Shadow: 0px 4px 14px rgba(20, 40, 90, 0.05)
    Padding: 24px
    Layout: Horizontal auto-layout, gap 16px, align top

    Sub-element: Icon Circle
      Size: 56 x 56 px
      Background: Radial gradient #2149E8 → #1631B0 (135deg)
      Border radius: 50%
      Icon size: 24 x 24 px, stroke/fill: #FFFFFF

    Sub-element: Text Stack (vertical, gap 6px)
      Title:
        Font: Inter/Manrope, Bold (700)
        Size: 18.5 px
        Line height: 128%
        Color: #0B1238
        Width: 2-line wrap
      Body:
        Font: Inter, Regular (400)
        Size: 14.5 px
        Line height: 148%
        Color: #5B6B8C

  Grid Items:
    01 — Icon: Rocket
        Title: "No setup fees — launch in under 48 hours"
        Body: "Get started quickly with zero setup fees and go live
               in less than 48 hours."
    02 — Icon: Shield-check
        Title: "30,000+ verified publishers from day one"
        Body: "Access a network of 30,000+ verified publishers ready
               to promote your brand."
    03 — Icon: Headset
        Title: "Dedicated success manager included"
        Body: "Work with a dedicated success manager who's with you
               every step of the way."
    04 — Icon: Pause (two bars)
        Title: "Pause or cancel campaigns anytime"
        Body: "Flexibility you need — pause or cancel campaigns
               anytime, no hassle."

COMPONENT: Bottom CTA Row
  Position: margin-top 32 px
  Layout: Horizontal auto-layout, gap 16px, align center

  Primary Button:
    Size: Auto-width (≈228 px) x 64 px
    Padding: 18px 32px
    Background: #1E2FA8 → #2149E8 (gradient, 135deg) — solid deep royal blue
    Border radius: 16 px
    Content: "Get Started Free" + Arrow-right icon (20x20, stroke 2px)
    Font: Inter/Manrope, Bold (700), 17 px
    Text/Icon color: #FFFFFF
    Layout: Horizontal, gap 10px, space-between

  Secondary Button:
    Size: Auto-width (≈188 px) x 64 px
    Padding: 18px 32px
    Background: #FFFFFF
    Border: 1.5px solid #2149E8
    Border radius: 16 px
    Content: "Book a Demo"
    Font: Inter/Manrope, Bold (700), 17 px
    Text color: #2149E8

------------------------------------------------------------
RIGHT ILLUSTRATION COLUMN (Absolute / Layered Group)
------------------------------------------------------------
Bounding area: x:1080–1480, y:90–620 (≈400 x 530 px)

  Layer 1 — Dashboard Card (base)
    Position: x:1140, y:100
    Size: 340 x 340 px
    Background: #FFFFFF
    Border radius: 32 px
    Shadow: 0px 20px 50px rgba(20,40,90,0.12)
    Content: 3D line chart (trend dots + connecting line, blue #2149E8)
             + 3 ascending 3D bars (gradient blue, rounded top corners)

  Layer 2 — Profile Card (floating, overlapping bottom-left of dashboard)
    Position: x:1050, y:370
    Size: 190 x 190 px
    Background: Gradient #1E3FE0 → #2149E8 (135deg)
    Border radius: 28 px
    Shadow: 0px 16px 36px rgba(20,40,90,0.18)
    Content: White glossy user/person icon, centered, size 80x80

  Layer 3 — 3D Pie Chart (floating, bottom-right, overlapping)
    Position: x:1260, y:480
    Size: 130 x 130 px
    Style: 3D glossy pie/donut, 4 segments, blue gradient shades
           (#2149E8, #3D5CFF, #1631B0, lighter highlight facet)
    Shadow: 0px 12px 28px rgba(20,40,90,0.15)

------------------------------------------------------------
COLOR STYLES
------------------------------------------------------------
Text/Navy-900        #0B1238   (headings, card titles)
Primary/Blue-600      #2149E8   (accent text, icons, buttons, links)
Primary/Blue-700      #1E2FA8   (button gradient dark stop)
Text/Body-Muted       #5B6B8C   (paragraphs)
Badge/Bg              #EAF0FE
Surface/White         #FFFFFF
Border/Card           #ECEFF6
Background/Base       #FFFFFF
Decorative/Dot        #C7D2E8
Decorative/Glow       #EAF0FE
Decorative/Blob       #EDF2FC
Shadow/Card           rgba(20,40,90,0.05)
Shadow/Illustration   rgba(20,40,90,0.12–0.18)

------------------------------------------------------------
TYPOGRAPHY STYLES
------------------------------------------------------------
Badge Label:      Inter Bold / 14 / 0.5px tracking / Uppercase / #2149E8
Heading:          Manrope ExtraBold / 56 / 108% / #0B1238 (+ #2149E8 highlight span)
Description:      Inter Regular / 19 / 152% / #5B6B8C
Card Title:       Inter Bold / 18.5 / 128% / #0B1238
Card Body:        Inter Regular / 14.5 / 148% / #5B6B8C
Button Label:      Inter Bold / 17 / #FFFFFF or #2149E8

------------------------------------------------------------
EFFECT STYLES
------------------------------------------------------------
Shadow/Card-Rest:        X0 Y4 Blur14 Spread0 rgba(20,40,90,0.05)
Shadow/Illustration-Main: X0 Y20 Blur50 Spread0 rgba(20,40,90,0.12)
Shadow/Illustration-Float:X0 Y16 Blur36 Spread0 rgba(20,40,90,0.18)
Border/Card-Hairline:     1px solid #ECEFF6
Border/Button-Outline:    1.5px solid #2149E8

------------------------------------------------------------
COMPONENT HIERARCHY (Layer Tree)
------------------------------------------------------------
CTA Section (Frame 1536x1024, radius 32)
├── Background Group
│   ├── Base Fill (#FFFFFF)
│   ├── Radial Glow Right
│   ├── Circle Blob Bottom Right
│   ├── Dot Grid Top Right
│   └── Dot Grid Bottom Left
├── Left Content Column (Auto-layout, Vertical, gap 28)
│   ├── Top Badge (pill)
│   │   ├── Dot Indicator
│   │   └── Label Text
│   ├── Heading Block (2 lines, mixed color spans)
│   ├── Description Paragraph
│   ├── Feature Grid (2x2, gap 20)
│   │   ├── Card 01 (Rocket)
│   │   ├── Card 02 (Shield)
│   │   ├── Card 03 (Headset)
│   │   └── Card 04 (Pause)
│   └── Bottom CTA Row (Auto-layout, Horizontal, gap 16)
│       ├── Primary Button (Get Started Free)
│       └── Secondary Button (Book a Demo)
└── Right Illustration Group (absolute, layered)
    ├── Dashboard Card (base layer)
    │   ├── Trend Line + Dots
    │   └── 3D Bar Chart (3 bars)
    ├── Profile Card (floating, front-left)
    │   └── User Icon
    └── Pie Chart (floating, front-bottom-right)