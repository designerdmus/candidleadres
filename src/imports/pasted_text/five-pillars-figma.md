FIGMA DESIGN SPECIFICATION
Section — "Five Pillars That Set Us Apart" (Feature Grid)
============================================================

FRAME
------------------------------------------------------------
Name: Features / Five-Pillars Section
Size: 1536 x 1024 px
Background: Solid #FBFCFE with subtle gradient wash to #F4F7FC (top→bottom)
Overflow: Hidden (decorative elements bleed off edges)

------------------------------------------------------------
LAYOUT GRID
------------------------------------------------------------
Columns: 3 (top row) / 2 centered (bottom row)
Margin (L/R): 70 px
Gutter (column gap): 34 px
Row gap: 30 px
Content max-width: 1396 px
Card width (3-col row): 442 px
Card width (2-col row): 435 px

------------------------------------------------------------
DECORATIVE BACKGROUND ELEMENTS
------------------------------------------------------------
1. Dot Grid — Top Left
   Position: x:20, y:44
   Pattern: 4 x 4 dots, 28px spacing
   Dot size: 4 x 4 px, Radius: 50%
   Color: #C7D2E8 (opacity 65%)

2. Dot Grid — Right Edge (partial, faded)
   Position: x:1460, y:200
   Pattern: 6 x 8 dots, sparse, 26px spacing
   Dot size: 3 x 3 px
   Color: #D8E0F2 (opacity 40%)

3. Circle Blob — Top Right
   Position: x:1430, y:-100 (bleeds off top edge)
   Size: 220 x 220 px, Radius: 50%
   Fill: #DCE6FA (opacity 55%)

4. Wave Lines — Bottom Left
   Position: x:-40, y:940
   Size: ≈420 x 120 px
   Stroke: #E4E9F5, weight 1.5px, 3 overlapping wavy paths
   Opacity: 60%

------------------------------------------------------------
COMPONENT: Section Header (Centered Stack)
------------------------------------------------------------
Position: Centered horizontally, y:40
Width: 900 px, Text align: center
Layout: Vertical auto-layout, gap 12px, align center

  Eyebrow Label:
    Content: "•  WHY CHOOSE US  •"
    Font: Inter, Bold (700)
    Size: 15 px
    Letter spacing: 2 px
    Color: #2149E8
    Text-transform: Uppercase

  Headline:
    Content: "Five pillars that set us apart"
    Font: Poppins / Inter, ExtraBold (800)
    Size: 52 px
    Line height: 110%
    Color: #0B1739
    Margin-top: 8 px

  Subheadline:
    Content: "Built for serious growth teams who demand transparency,
              speed, and results from their affiliate programs."
    Font: Inter, Regular (400)
    Size: 19 px
    Line height: 150%
    Color: #5B6B8C
    Width: 640 px (wraps to 2 lines, centered)
    Margin-top: 4 px

------------------------------------------------------------
COMPONENT: Feature Card (Base Component)
------------------------------------------------------------
Size: 442 x 366 px (Row 1) / 435 x 322 px (Row 2, shorter — no "Learn more")
Background: #FFFFFF
Border: 1px solid #ECEFF6
Border radius: 20 px
Shadow: 0px 2px 8px rgba(20, 40, 90, 0.04)
Padding: 32px 32px 32px 32px
Layout: Vertical auto-layout, gap 20px, align left

  Sub-element: Number + Rule Row
    Layout: Horizontal auto-layout, gap 10px, align center
    Number Text:
      Content: "01"–"05"
      Font: Inter/Poppins, ExtraBold (800)
      Size: 26 px
      Color: #2149E8
    Rule Line:
      Size: 32 x 2 px
      Color: #B9C6E8

  Sub-element: Icon Container (circular)
    Size: 88 x 88 px
    Background: Radial/flat fill #E7EDFC
    Border radius: 50% (full circle)
    Icon size: 40 x 40 px
    Icon stroke color: #2149E8, stroke weight 2.2px
    Margin-top: 4 px

  Sub-element: Title
    Font: Poppins / Inter, Bold (700)
    Size: 23 px
    Line height: 128%
    Color: #0B1739
    Width: 2-line wrap (e.g., "Intelligent / Tracking")

  Sub-element: Small Underline Accent
    Size: 28 x 3 px
    Color: #2149E8
    Border radius: 2 px
    Margin: 4px 0

  Sub-element: Body Text
    Font: Inter, Regular (400)
    Size: 15.5 px
    Line height: 158%
    Color: #5B6B8C
    Width: fill (≈378px)

  Sub-element: "Learn more" Link (Card 01 only)
    Font: Inter, SemiBold (600)
    Size: 15 px
    Color: #2149E8
    Icon: Arrow-right, 16x16, stroke 2px
    Layout: Horizontal auto-layout, gap 6px, align center
    Position: Bottom-anchored within card (margin-top: auto)

------------------------------------------------------------
CARD GRID POSITIONS
------------------------------------------------------------
Row 1 (y: 278, height 366):
  Card 01 — x:70   | Icon: Target/focus-scan (crosshair with center dot)
  Card 02 — x:546  | Icon: Globe/network (wireframe sphere with grid lines)
  Card 03 — x:1022 | Icon: Bar-chart ascending (3 bars)

Row 2 (y: 664, height 322 — centered under row 1 with left offset):
  Card 04 — x:318  | Icon: Person with star badge (dedicated expert)
  Card 05 — x:794  | Icon: Shield with checkmark (fraud protection)

Row gap: 20 px (278+366=644 → 664 start)

------------------------------------------------------------
CARD CONTENT DATA
------------------------------------------------------------
01 — Intelligent Tracking
   "Sub-second event capture with multi-touch attribution models.
    Never miss a conversion with our redundant, enterprise-grade
    infrastructure."
   [Learn more →]

02 — Global Campaign Network
   "Access 50,000+ vetted publishers across 120+ countries. Launch
    global campaigns from a single unified dashboard."

03 — Real-Time Analytics
   "Live dashboards with granular breakdowns by partner, geo,
    device, and creative. React to data as it happens."

04 — Dedicated Experts
   "Your personal success team is available 24/7. Industry veterans
    who know your vertical and drive consistent results."

05 — Fraud Protection
   "AI-powered fraud detection blocks invalid traffic before it hits
    your budget — 99.2% accuracy, zero false positives."

------------------------------------------------------------
COLOR STYLES
------------------------------------------------------------
Primary/Navy-900      #0B1739   (headings)
Primary/Blue-600      #2149E8   (numbers, icons, accents, links)
Text/Body-Muted       #5B6B8C   (paragraph text, subheadline)
Text/Rule-Light       #B9C6E8   (small rule line next to number)
Icon/Bg-Tint          #E7EDFC   (circular icon background)
Surface/White         #FFFFFF   (card background)
Border/Card           #ECEFF6   (1px card border)
Background/Base       #FBFCFE
Background/Wash       #F4F7FC
Decorative/Dot        #C7D2E8
Decorative/Blob       #DCE6FA
Decorative/Wave       #E4E9F5
Shadow/Card           rgba(20,40,90,0.04)

------------------------------------------------------------
TYPOGRAPHY STYLES
------------------------------------------------------------
Eyebrow Label:    Inter Bold / 15 / 2px tracking / Uppercase / #2149E8
Section Headline: Poppins ExtraBold / 52 / 110% / #0B1739
Subheadline:      Inter Regular / 19 / 150% / #5B6B8C
Card Number:      Inter ExtraBold / 26 / #2149E8
Card Title:       Poppins Bold / 23 / 128% / #0B1739
Card Body:        Inter Regular / 15.5 / 158% / #5B6B8C
Learn More Link:  Inter SemiBold / 15 / #2149E8

------------------------------------------------------------
EFFECT STYLES
------------------------------------------------------------
Shadow/Card-Rest:  X0 Y2 Blur8 Spread0 rgba(20,40,90,0.04)
Border/Card-Hairline: 1px solid #ECEFF6

------------------------------------------------------------
COMPONENT HIERARCHY (Layer Tree)
------------------------------------------------------------
Features Section (Frame 1536x1024)
├── Background Group
│   ├── Base Fill
│   ├── Dot Grid Top Left
│   ├── Dot Grid Right Edge
│   ├── Blob Top Right
│   └── Wave Lines Bottom Left
├── Section Header (Auto-layout, Vertical, centered)
│   ├── Eyebrow Label
│   ├── Headline
│   └── Subheadline
├── Card Grid Row 1 (Auto-layout, Horizontal, gap 34)
│   ├── Feature Card 01
│   │   ├── Number+Rule Row
│   │   ├── Icon Container (Target)
│   │   ├── Title
│   │   ├── Underline Accent
│   │   ├── Body Text
│   │   └── Learn More Link
│   ├── Feature Card 02
│   │   ├── Number+Rule Row
│   │   ├── Icon Container (Globe)
│   │   ├── Title
│   │   ├── Underline Accent
│   │   └── Body Text
│   └── Feature Card 03
│       ├── Number+Rule Row
│       ├── Icon Container (Bar Chart)
│       ├── Title
│       ├── Underline Accent
│       └── Body Text
└── Card Grid Row 2 (Auto-layout, Horizontal, gap 34, centered)
    ├── Feature Card 04
    │   ├── Number+Rule Row
    │   ├── Icon Container (Person+Star)
    │   ├── Title
    │   ├── Underline Accent
    │   └── Body Text
    └── Feature Card 05
        ├── Number+Rule Row
        ├── Icon Container (Shield+Check)
        ├── Title
        ├── Underline Accent
        └── Body Text