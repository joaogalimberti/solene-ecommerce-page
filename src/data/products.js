const products = [
  {
    "id": "SOL-001",
    "name": "Camisa Éther Linen",
    "category": "camisas",
    "gender": "unissex",
    "price": 890,
    "fabric": "100% Linho Italiano Premium",
    "color": "Areia Natural",
    "sizes": [
      { "label": "XS", "stock": 6 },
      { "label": "S", "stock": 10 },
      { "label": "M", "stock": 14 },
      { "label": "L", "stock": 9 },
      { "label": "XL", "stock": 4 }
    ],
    "description": "Minimalismo elevado à sua forma mais pura. Leve, respirável e sofisticada.",
    "details": ["Respirável", "Modelagem reta", "Acabamento artesanal"],
    "image": "camisa-ether.jpg"
  },
  {
    "id": "SOL-002",
    "name": "Camisa Noa Oversized",
    "category": "camisas",
    "gender": "unissex",
    "price": 980,
    "fabric": "Linho Orgânico Certificado",
    "color": "Verde Oliva",
    "sizes": [
      { "label": "XS", "stock": 5 },
      { "label": "S", "stock": 9 },
      { "label": "M", "stock": 12 },
      { "label": "L", "stock": 8 },
      { "label": "XL", "stock": 5 }
    ],
    "description": "Design contemporâneo com presença marcante e conforto absoluto.",
    "details": ["Oversized premium", "Toque macio", "Estilo urbano sofisticado"],
    "image": "camisa-noa.jpg"
  },
  {
    "id": "SOL-003",
    "name": "Camisa Atlas",
    "category": "camisas",
    "gender": "unissex",
    "price": 1050,
    "fabric": "Linho Belga de Alta Gramatura",
    "color": "Cinza Pedra",
    "sizes": [
      { "label": "XS", "stock": 4 },
      { "label": "S", "stock": 8 },
      { "label": "M", "stock": 10 },
      { "label": "L", "stock": 7 },
      { "label": "XL", "stock": 3 }
    ],
    "description": "Estrutura e fluidez em perfeita harmonia para uso diário sofisticado.",
    "details": ["Alta durabilidade", "Textura encorpada", "Elegância discreta"],
    "image": "camisa-atlas.jpg"
  },
  {
    "id": "SOL-004",
    "name": "Vestido Aura Linen",
    "category": "vestidos",
    "gender": "unissex",
    "price": 1290,
    "fabric": "Linho Francês Stone Washed",
    "color": "Off-white",
    "sizes": [
      { "label": "XS", "stock": 5 },
      { "label": "S", "stock": 8 },
      { "label": "M", "stock": 10 },
      { "label": "L", "stock": 6 },
      { "label": "XL", "stock": 2 }
    ],
    "description": "Criado para fluir com o corpo com leveza e presença refinada.",
    "details": ["Caimento fluido", "Textura suave", "Design atemporal"],
    "image": "vestido-aura.jpg"
  },
  {
    "id": "SOL-005",
    "name": "Vestido Solstice",
    "category": "vestidos",
    "gender": "unissex",
    "price": 1490,
    "fabric": "Linho Belga Premium",
    "color": "Marfim",
    "sizes": [
      { "label": "XS", "stock": 4 },
      { "label": "S", "stock": 6 },
      { "label": "M", "stock": 9 },
      { "label": "L", "stock": 5 },
      { "label": "XL", "stock": 2 }
    ],
    "description": "Uma peça de impacto silencioso, ideal para ocasiões especiais.",
    "details": ["Corte sofisticado", "Leveza natural", "Respirabilidade"],
    "image": "vestido-solstice.jpg"
  },
  {
    "id": "SOL-006",
    "name": "Calça Solaris",
    "category": "calcas",
    "gender": "unissex",
    "price": 1150,
    "fabric": "Linho Premium com Fibras Naturais",
    "color": "Bege Quente",
    "sizes": [
      { "label": "XS", "stock": 5 },
      { "label": "S", "stock": 8 },
      { "label": "M", "stock": 12 },
      { "label": "L", "stock": 7 },
      { "label": "XL", "stock": 3 }
    ],
    "description": "Movimento livre com estética refinada.",
    "details": ["Cintura ajustável", "Tecido respirável", "Corte elegante"],
    "image": "calca-solaris.jpg"
  },
  {
    "id": "SOL-007",
    "name": "Calça Meridian",
    "category": "calcas",
    "gender": "unissex",
    "price": 1320,
    "fabric": "Linho Italiano Encorpado",
    "color": "Marrom Claro",
    "sizes": [
      { "label": "XS", "stock": 4 },
      { "label": "S", "stock": 7 },
      { "label": "M", "stock": 10 },
      { "label": "L", "stock": 6 },
      { "label": "XL", "stock": 2 }
    ],
    "description": "Sofisticação estrutural para o dia a dia premium.",
    "details": ["Modelagem reta", "Alta resistência", "Visual limpo"],
    "image": "calca-meridian.jpg"
  },
  {
    "id": "SOL-008",
    "name": "Bermuda Horizon",
    "category": "bermudas",
    "gender": "unissex",
    "price": 790,
    "fabric": "Linho Natural de Alta Gramatura",
    "color": "Cinza Mineral",
    "sizes": [
      { "label": "XS", "stock": 6 },
      { "label": "S", "stock": 10 },
      { "label": "M", "stock": 14 },
      { "label": "L", "stock": 9 },
      { "label": "XL", "stock": 5 }
    ],
    "description": "Elegância funcional para climas quentes.",
    "details": ["Corte preciso", "Conforto térmico", "Design minimalista"],
    "image": "bermuda-horizon.jpg"
  },
  {
    "id": "SOL-009",
    "name": "Overshirt Boreal",
    "category": "overshirts",
    "gender": "unissex",
    "price": 1380,
    "fabric": "Linho Estruturado Premium",
    "color": "Azul Profundo",
    "sizes": [
      { "label": "XS", "stock": 3 },
      { "label": "S", "stock": 6 },
      { "label": "M", "stock": 9 },
      { "label": "L", "stock": 5 },
      { "label": "XL", "stock": 2 }
    ],
    "description": "Uma camada extra de sofisticação com identidade forte.",
    "details": ["Versátil", "Estrutura elegante", "Toque encorpado"],
    "image": "overshirt-boreal.jpg"
  },
  {
    "id": "SOL-010",
    "name": "Túnica Selene Flow",
    "category": "tunicas",
    "gender": "unissex",
    "price": 1180,
    "fabric": "Linho Puro Natural",
    "color": "Off-white Natural",
    "sizes": [
      { "label": "XS", "stock": 5 },
      { "label": "S", "stock": 8 },
      { "label": "M", "stock": 11 },
      { "label": "L", "stock": 6 },
      { "label": "XL", "stock": 3 }
    ],
    "description": "Expressão máxima de fluidez e conforto premium.",
    "details": ["Design fluido", "Estética contemporânea", "Sensação leve"],
    "image": "tunica-selene.jpg"
  },
  {
    "id": "SOL-011",
    "name": "Camisa Dune Classic",
    "category": "camisas",
    "gender": "unissex",
    "price": 920,
    "fabric": "Linho Natural Stone Washed",
    "color": "Areia Clara",
    "sizes": [
      { "label": "XS", "stock": 7 },
      { "label": "S", "stock": 11 },
      { "label": "M", "stock": 15 },
      { "label": "L", "stock": 9 },
      { "label": "XL", "stock": 4 }
    ],
    "description": "Clássica, atemporal e construída para durar.",
    "details": ["Corte tradicional", "Toque suave", "Versatilidade premium"],
    "image": "camisa-dune.jpg"
  },
  {
    "id": "SOL-012",
    "name": "Vestido Lume",
    "category": "vestidos",
    "gender": "unissex",
    "price": 1420,
    "fabric": "Linho Francês Premium",
    "color": "Bege Claro",
    "sizes": [
      { "label": "XS", "stock": 4 },
      { "label": "S", "stock": 7 },
      { "label": "M", "stock": 9 },
      { "label": "L", "stock": 5 },
      { "label": "XL", "stock": 2 }
    ],
    "description": "Leveza e sofisticação em perfeita harmonia.",
    "details": ["Fluidez natural", "Elegância minimalista", "Acabamento refinado"],
    "image": "vestido-lume.jpg"
  },
  {
    "id": "SOL-013",
    "name": "Calça Terra Linen",
    "category": "calcas",
    "gender": "unissex",
    "price": 1240,
    "fabric": "Linho Italiano Natural",
    "color": "Terra Queimada",
    "sizes": [
      { "label": "XS", "stock": 5 },
      { "label": "S", "stock": 8 },
      { "label": "M", "stock": 11 },
      { "label": "L", "stock": 6 },
      { "label": "XL", "stock": 3 }
    ],
    "description": "Conforto estrutural com estética orgânica.",
    "details": ["Corte preciso", "Tecido respirável", "Estilo sofisticado"],
    "image": "calca-terra.jpg"
  },
  {
    "id": "SOL-014",
    "name": "Bermuda Solace",
    "category": "bermudas",
    "gender": "unissex",
    "price": 820,
    "fabric": "Linho Orgânico Premium",
    "color": "Off-white",
    "sizes": [
      { "label": "XS", "stock": 6 },
      { "label": "S", "stock": 9 },
      { "label": "M", "stock": 13 },
      { "label": "L", "stock": 8 },
      { "label": "XL", "stock": 4 }
    ],
    "description": "Minimalismo funcional para dias leves.",
    "details": ["Leveza térmica", "Design limpo", "Conforto absoluto"],
    "image": "bermuda-solace.jpg"
  },
  {
    "id": "SOL-015",
    "name": "Overshirt Calma",
    "category": "overshirts",
    "gender": "unissex",
    "price": 1450,
    "fabric": "Linho Premium Estruturado",
    "color": "Bege Rosado",
    "sizes": [
      { "label": "XS", "stock": 3 },
      { "label": "S", "stock": 5 },
      { "label": "M", "stock": 8 },
      { "label": "L", "stock": 4 },
      { "label": "XL", "stock": 2 }
    ],
    "description": "Peça statement de luxo silencioso.",
    "details": ["Estrutura marcante", "Estilo contemporâneo", "Toque refinado"],
    "image": "overshirt-calma.jpg"
  }
];

export default products;
