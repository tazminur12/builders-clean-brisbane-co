/** Room-by-room builders clean checklist (docs/06 §4). Also used to generate the PDF. */
export const CHECKLIST_PDF = '/downloads/builders-clean-checklist-queensland.pdf';

export const CHECKLIST: { room: string; items: string[] }[] = [
  { room: 'Kitchen', items: ['Benchtops and splashback free of dust, residue and stickers', 'Cupboards and drawers wiped inside, including runners', 'Pantry shelves wiped', 'Sink, tapware and drain area polished', 'Oven, cooktop and rangehood inside and out (if in scope)', 'Dishwasher and fridge cavity wiped', 'Appliance stickers and film removed'] },
  { room: 'Bathrooms and ensuites', items: ['Tiles and grout free of haze', 'Shower screen and mirror streak-free, silicone smears removed', 'Vanity inside and out', 'Basin, tapware and toilet cleaned', 'Exhaust fan grille dusted', 'Floor waste and edges clean'] },
  { room: 'Laundry', items: ['Tub and tapware cleaned', 'Cabinetry wiped inside and out', 'Splashback and tiles free of haze', 'Floor and edges clean'] },
  { room: 'Living areas', items: ['Skirting boards wiped', 'Walls spot-cleaned (marks and dust)', 'Built-in joinery inside and out', 'Power points and switch plates wiped'] },
  { room: 'Bedrooms and wardrobes', items: ['Wardrobe shelves, rails and drawers wiped inside', 'Wardrobe doors and tracks', 'Skirting and window sills'] },
  { room: 'Ceilings and fans', items: ['Cobwebs and dust removed from ceilings and cornices', 'Ceiling fans blades top and bottom', 'Light fittings and pendants dusted', 'Air-conditioning vents and returns (surface)'] },
  { room: 'Windows and frames', items: ['Glass inside (and outside where safe)', 'Stickers, labels and light paint removed', 'Frames and sills wiped', 'Tracks vacuumed and wiped', 'Screens (if in scope)'] },
  { room: 'Doors and hardware', items: ['Doors both sides, including tops', 'Door frames and architraves', 'Handles, hinges and locks polished', 'Sliding door tracks clean'] },
  { room: 'Floors', items: ['Hard floors vacuumed and mopped to suit the surface', 'Edges and corners detailed by hand', 'Grout haze removed from tiles', 'Polished concrete buffed', 'Carpets vacuumed (steam cleaning separate)'] },
  { room: 'External entries and balconies', items: ['Entries swept and front door cleaned', 'Balconies swept and wiped (if in scope)', 'Balustrade glass (where safe)', 'Garage swept (if in scope)'] },
];
