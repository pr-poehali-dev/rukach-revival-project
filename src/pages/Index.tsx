import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const products = [
    {
      id: 1,
      name: "Деревянная мебель ручной работы",
      category: "Мебель",
      price: "25 000 ₽",
      image: "/img/89482768-6efd-4182-b59b-c42095c1379f.jpg",
      verified: true,
      rating: 5
    },
    {
      id: 2,
      name: "Льняная одежда премиум",
      category: "Одежда",
      price: "8 500 ₽",
      image: "/placeholder.svg",
      verified: true,
      rating: 5
    },
    {
      id: 3,
      name: "Керамическая посуда",
      category: "Посуда",
      price: "3 200 ₽",
      image: "/placeholder.svg",
      verified: true,
      rating: 5
    }
  ];

  const certificates = [
    {
      title: "Сертификат качества РУКАЧ",
      description: "Подтверждает соответствие стандартам русского качества",
      image: "/img/e5cec3cf-5ae3-41d7-988b-1a07b89ed2af.jpg"
    },
    {
      title: "Знак мастера",
      description: "Гарантия подлинности и традиционных технологий",
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-primary">РУКАЧ</div>
              <Badge variant="outline" className="text-xs">Русское качество</Badge>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Продукция</a>
              <a href="#verified" className="text-foreground hover:text-primary transition-colors">Проверено</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О проекте</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button variant="outline">
              <Icon name="Menu" size={20} />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 to-primary/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                РУКАЧ
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Возрождаем традиции русского качества
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-lg"><strong>Р</strong>усское наследие</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-lg"><strong>У</strong>важение к традициям</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-lg"><strong>К</strong>ачество, проверенное временем</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-lg"><strong>А</strong>вторский подход</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-lg"><strong>Ч</strong>естность в каждом изделии</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Каталог товаров
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  О движении
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/42f912a2-bc6d-4652-99b4-0d583797d5bc.jpg" 
                alt="Русский мастер за работой"
                className="rounded-lg shadow-2xl w-full"
              />
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-full p-6">
                <Icon name="Award" size={32} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ПРОДУКЦИЯ РУКАЧ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Каждый товар проходит строгий отбор и соответствует высочайшим стандартам русского качества
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.verified && (
                    <Badge className="absolute top-3 right-3 bg-primary">
                      <Icon name="CheckCircle" size={16} className="mr-1" />
                      Проверено
                    </Badge>
                  )}
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className="flex">
                      {[...Array(product.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">{product.category}</Badge>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <Button>
                      В корзину
                      <Icon name="ShoppingCart" size={16} className="ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Section */}
      <section id="verified" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              ПРОВЕРЕНО РУКАЧ
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Наша система сертификации гарантирует подлинность и высокое качество каждого изделия
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {certificates.map((cert, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-center space-x-6">
                  <img 
                    src={cert.image} 
                    alt={cert.title}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="bg-white rounded-lg p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Проверка качества</h3>
                <p className="text-muted-foreground">Многоступенчатый контроль соответствия стандартам</p>
              </div>
              <div>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Сертифицированные мастера</h3>
                <p className="text-muted-foreground">Только проверенные производители с подтвержденной репутацией</p>
              </div>
              <div>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" size={32} className="text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Гарантия подлинности</h3>
                <p className="text-muted-foreground">Каждое изделие имеет уникальный номер и паспорт качества</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              О проекте РУКАЧ
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              РУКАЧ — это больше чем бренд. Это движение, призванное вернуть доверие к российским товарам, 
              доказать, что «сделано в России» — значит сделано на совесть, с душой и непревзойдённым качеством.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Наш проект объединяет лучших производителей, мастеров и энтузиастов, которые берегут традиции, 
              используют натуральные материалы и внедряют инновации, сохраняя исконно русский подход к делу.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Badge className="text-sm py-2 px-4">#РУКАЧ</Badge>
              <Badge className="text-sm py-2 px-4">#СделаноВРоссии</Badge>
              <Badge className="text-sm py-2 px-4">#РусскоеКачество</Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8">
              Присоединяйтесь к движению
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Выберите качество — выберите РУКАЧ! Давайте вместе создадим новую эру русского качества.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary" size="lg">
                Стать партнером
                <Icon name="Handshake" size={20} className="ml-2" />
              </Button>
              <Button variant="outline" size="lg" className="border-background text-background hover:bg-background hover:text-foreground">
                Связаться с нами
                <Icon name="Mail" size={20} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="text-xl font-bold text-primary">РУКАЧ</div>
              <span className="text-sm text-muted-foreground">© 2024 Все права защищены</span>
            </div>
            <div className="flex space-x-6">
              <Icon name="Phone" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Icon name="Mail" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
              <Icon name="MessageCircle" size={20} className="text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}