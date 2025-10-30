import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

interface Animal {
  id: number;
  name: string;
  scientificName: string;
  class: string;
  habitat: string;
  region: string;
  conservationStatus: string;
  image: string;
  population: string;
  characteristics: string[];
}

const mockAnimals: Animal[] = [
  {
    id: 1,
    name: 'Африканский лев',
    scientificName: 'Panthera leo',
    class: 'Млекопитающие',
    habitat: 'Саванна',
    region: 'Африка',
    conservationStatus: 'Уязвимый',
    image: 'https://cdn.poehali.dev/projects/6c62fe61-fa76-494d-a2f7-4d72046abb17/files/810ddfc5-290b-402b-8790-7a0c282b746e.jpg',
    population: '20,000-25,000',
    characteristics: ['Хищник', 'Социальный', 'Территориальный']
  },
  {
    id: 2,
    name: 'Тропический попугай ара',
    scientificName: 'Ara macao',
    class: 'Птицы',
    habitat: 'Тропический лес',
    region: 'Южная Америка',
    conservationStatus: 'Находится под угрозой',
    image: 'https://cdn.poehali.dev/projects/6c62fe61-fa76-494d-a2f7-4d72046abb17/files/a8a252e1-bc01-4daa-ae81-dffb95b9941a.jpg',
    population: '10,000-20,000',
    characteristics: ['Травоядный', 'Социальный', 'Долгожитель']
  },
  {
    id: 3,
    name: 'Рыба-клоун',
    scientificName: 'Amphiprioninae',
    class: 'Костные рыбы',
    habitat: 'Коралловый риф',
    region: 'Индо-Тихоокеанский регион',
    conservationStatus: 'Стабильный',
    image: 'https://cdn.poehali.dev/projects/6c62fe61-fa76-494d-a2f7-4d72046abb17/files/16ea3661-b8f9-433d-8bcf-15674888bfc5.jpg',
    population: 'Многочисленная',
    characteristics: ['Симбиоз с актинией', 'Гермафродит', 'Территориальный']
  }
];

const researchStats = [
  { label: 'Видов изучено', value: '2,847', icon: 'Dna' },
  { label: 'Активных исследований', value: '156', icon: 'FlaskConical' },
  { label: 'Публикаций', value: '1,234', icon: 'BookOpen' },
  { label: 'Исследователей', value: '342', icon: 'Users' }
];

export default function Index() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedClass, setSelectedClass] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  const filteredAnimals = mockAnimals.filter(animal => {
    const matchesSearch = animal.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         animal.scientificName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesClass = selectedClass === 'all' || animal.class === selectedClass;
    const matchesRegion = selectedRegion === 'all' || animal.region === selectedRegion;
    return matchesSearch && matchesClass && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Icon name="Microscope" size={32} className="text-primary" />
              <div>
                <h1 className="text-2xl font-bold">ZooResearch</h1>
                <p className="text-sm text-muted-foreground">Научный центр изучения животных</p>
              </div>
            </div>
            <nav className="flex gap-6">
              <Button variant="ghost" className="text-foreground">
                <Icon name="Home" size={18} className="mr-2" />
                Главная
              </Button>
              <Button variant="ghost" className="text-foreground">
                <Icon name="Database" size={18} className="mr-2" />
                База данных
              </Button>
              <Button variant="ghost" className="text-foreground">
                <Icon name="FlaskConical" size={18} className="mr-2" />
                Исследования
              </Button>
              <Button variant="ghost" className="text-foreground">
                <Icon name="BookOpen" size={18} className="mr-2" />
                Публикации
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Научно-исследовательский портал
            </Badge>
            <h2 className="text-5xl font-bold mb-6 leading-tight">
              Комплексное изучение<br />биоразнообразия планеты
            </h2>
            <p className="text-xl text-muted-foreground mb-8 serif">
              Современная платформа для исследования, классификации и мониторинга животного мира. 
              Доступ к актуальным научным данным о тысячах видов.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Search" size={18} className="mr-2" />
                Начать исследование
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Info" size={18} className="mr-2" />
                О проекте
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-6">
            {researchStats.map((stat) => (
              <Card key={stat.label} className="border-border/50 hover:border-primary/50 transition-all">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Icon name={stat.icon as any} size={24} className="text-primary" />
                    <Badge variant="outline" className="text-xs">{stat.value}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h3 className="text-3xl font-bold mb-2">База данных животных</h3>
            <p className="text-muted-foreground">Продвинутый поиск по видам, регионам и характеристикам</p>
          </div>

          <Card className="mb-8 border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Icon name="SearchCode" size={24} />
                Расширенный поиск
              </CardTitle>
              <CardDescription>Используйте фильтры для точного поиска видов</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-3 md:col-span-1">
                  <label className="text-sm font-medium mb-2 block">Поиск по названию</label>
                  <div className="relative">
                    <Icon name="Search" size={18} className="absolute left-3 top-3 text-muted-foreground" />
                    <Input
                      placeholder="Название или латинское имя..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Класс животных</label>
                  <Select value={selectedClass} onValueChange={setSelectedClass}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все классы</SelectItem>
                      <SelectItem value="Млекопитающие">Млекопитающие</SelectItem>
                      <SelectItem value="Птицы">Птицы</SelectItem>
                      <SelectItem value="Костные рыбы">Костные рыбы</SelectItem>
                      <SelectItem value="Рептилии">Рептилии</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Регион</label>
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Все регионы</SelectItem>
                      <SelectItem value="Африка">Африка</SelectItem>
                      <SelectItem value="Южная Америка">Южная Америка</SelectItem>
                      <SelectItem value="Индо-Тихоокеанский регион">Индо-Тихоокеанский</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {filteredAnimals.map((animal) => (
              <Card 
                key={animal.id} 
                className="overflow-hidden hover:border-primary/50 transition-all cursor-pointer group"
                onClick={() => setSelectedAnimal(animal)}
              >
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <CardTitle className="text-lg mb-1">{animal.name}</CardTitle>
                      <p className="text-sm text-muted-foreground italic">{animal.scientificName}</p>
                    </div>
                    <Icon name="ChevronRight" size={20} className="text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <Badge variant="secondary" className="text-xs">
                      <Icon name="Layers" size={12} className="mr-1" />
                      {animal.class}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Icon name="MapPin" size={12} className="mr-1" />
                      {animal.region}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge 
                      className={`text-xs ${
                        animal.conservationStatus === 'Стабильный' 
                          ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                          : animal.conservationStatus === 'Уязвимый'
                          ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                          : 'bg-red-500/20 text-red-400 border-red-500/30'
                      }`}
                    >
                      {animal.conservationStatus}
                    </Badge>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>

          {selectedAnimal && (
            <Card className="border-primary/50">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-2xl mb-2">{selectedAnimal.name}</CardTitle>
                    <p className="text-lg text-muted-foreground italic">{selectedAnimal.scientificName}</p>
                  </div>
                  <Button variant="ghost" size="sm" onClick={() => setSelectedAnimal(null)}>
                    <Icon name="X" size={20} />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="info">
                  <TabsList className="mb-6">
                    <TabsTrigger value="info">
                      <Icon name="Info" size={16} className="mr-2" />
                      Информация
                    </TabsTrigger>
                    <TabsTrigger value="characteristics">
                      <Icon name="ListChecks" size={16} className="mr-2" />
                      Характеристики
                    </TabsTrigger>
                    <TabsTrigger value="research">
                      <Icon name="FlaskConical" size={16} className="mr-2" />
                      Исследования
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="info">
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Класс</h4>
                          <p className="text-lg">{selectedAnimal.class}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Среда обитания</h4>
                          <p className="text-lg">{selectedAnimal.habitat}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Регион</h4>
                          <p className="text-lg">{selectedAnimal.region}</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Популяция</h4>
                          <p className="text-lg">{selectedAnimal.population}</p>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-muted-foreground mb-1">Статус сохранения</h4>
                          <Badge 
                            className={`${
                              selectedAnimal.conservationStatus === 'Стабильный' 
                                ? 'bg-green-500/20 text-green-400 border-green-500/30' 
                                : selectedAnimal.conservationStatus === 'Уязвимый'
                                ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                                : 'bg-red-500/20 text-red-400 border-red-500/30'
                            }`}
                          >
                            {selectedAnimal.conservationStatus}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="characteristics">
                    <div className="space-y-3">
                      <h4 className="font-medium mb-4">Ключевые характеристики</h4>
                      {selectedAnimal.characteristics.map((char, idx) => (
                        <div key={idx} className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg">
                          <Icon name="CheckCircle2" size={18} className="text-primary" />
                          <span>{char}</span>
                        </div>
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="research">
                    <div className="space-y-4">
                      <div className="p-4 bg-secondary/50 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Icon name="FileText" size={20} className="text-primary mt-1" />
                          <div>
                            <h5 className="font-medium mb-1">Последнее исследование</h5>
                            <p className="text-sm text-muted-foreground">
                              Поведенческие паттерны в естественной среде обитания (2024)
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="p-4 bg-secondary/50 rounded-lg">
                        <div className="flex items-start gap-3">
                          <Icon name="TrendingUp" size={20} className="text-primary mt-1" />
                          <div>
                            <h5 className="font-medium mb-1">Динамика популяции</h5>
                            <p className="text-sm text-muted-foreground">
                              Стабильный рост на 3.2% за последние 5 лет
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Актуальные исследования</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ознакомьтесь с текущими научными проектами нашего центра
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border-border/50">
              <CardHeader>
                <Badge className="w-fit mb-3 bg-primary/20 text-primary border-primary/30">
                  В процессе
                </Badge>
                <CardTitle>Миграционные паттерны морских млекопитающих</CardTitle>
                <CardDescription className="serif">
                  Исследование сезонных маршрутов китообразных в Тихом океане с использованием спутникового мониторинга
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    12 исследователей
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    2023-2025
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardHeader>
                <Badge className="w-fit mb-3 bg-green-500/20 text-green-400 border-green-500/30">
                  Завершено
                </Badge>
                <CardTitle>Биоразнообразие тропических лесов Амазонии</CardTitle>
                <CardDescription className="serif">
                  Полный каталог видового состава позвоночных в экосистеме тропического леса
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="Users" size={14} />
                    24 исследователя
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Calendar" size={14} />
                    2020-2023
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4 flex items-center gap-2">
                <Icon name="Microscope" size={20} className="text-primary" />
                ZooResearch
              </h4>
              <p className="text-sm text-muted-foreground serif">
                Научный центр изучения биоразнообразия планеты
              </p>
            </div>
            <div>
              <h4 className="font-medium mb-4">Разделы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">База данных</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Исследования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Публикации</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Партнеры</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  research@zoo.org
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={14} />
                  Научный центр
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2024 ZooResearch. Научный портал изучения животных</p>
          </div>
        </div>
      </footer>
    </div>
  );
}