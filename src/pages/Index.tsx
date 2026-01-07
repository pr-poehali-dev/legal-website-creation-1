import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

export default function Index() {
  const { toast } = useToast();
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', email: '', message: '' });
  };

  const services = [
    {
      icon: 'Scale',
      title: 'Корпоративное право',
      description: 'Юридическое сопровождение бизнеса, сделок M&A, корпоративные споры'
    },
    {
      icon: 'FileText',
      title: 'Договорное право',
      description: 'Составление и экспертиза договоров, претензионная работа'
    },
    {
      icon: 'Building2',
      title: 'Арбитражные споры',
      description: 'Представительство интересов в судах всех инстанций'
    },
    {
      icon: 'UserCheck',
      title: 'Трудовое право',
      description: 'Защита прав работников и работодателей, трудовые споры'
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Сделки с недвижимостью, регистрация прав, споры'
    },
    {
      icon: 'Shield',
      title: 'Налоговое право',
      description: 'Налоговые споры, оптимизация, консультации'
    }
  ];

  const practices = [
    { name: 'Банкротство', cases: '120+' },
    { name: 'Интеллектуальная собственность', cases: '85+' },
    { name: 'Уголовное право', cases: '200+' },
    { name: 'Семейное право', cases: '150+' }
  ];

  const team = [
    {
      name: 'Александр Петров',
      position: 'Управляющий партнер',
      experience: '15 лет опыта'
    },
    {
      name: 'Елена Смирнова',
      position: 'Партнер, корпоративное право',
      experience: '12 лет опыта'
    },
    {
      name: 'Михаил Иванов',
      position: 'Партнер, арбитраж',
      experience: '14 лет опыта'
    },
    {
      name: 'Ольга Козлова',
      position: 'Старший юрист',
      experience: '8 лет опыта'
    }
  ];

  const testimonials = [
    {
      text: 'Профессиональная команда, которая решила наш сложный корпоративный спор. Рекомендуем!',
      author: 'ООО "ТехПром"',
      rating: 5
    },
    {
      text: 'Отличное юридическое сопровождение сделки. Все прошло быстро и без проблем.',
      author: 'АО "СтройИнвест"',
      rating: 5
    },
    {
      text: 'Грамотные специалисты, внимательное отношение к клиенту. Спасибо за помощь!',
      author: 'ИП Сидоров А.В.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: 'Новые изменения в корпоративном законодательстве 2024',
      date: '15 декабря 2023',
      category: 'Корпоративное право'
    },
    {
      title: 'Как защитить бизнес от недобросовестных контрагентов',
      date: '10 декабря 2023',
      category: 'Договорное право'
    },
    {
      title: 'Арбитражная практика: топ-5 ошибок в исковых заявлениях',
      date: '5 декабря 2023',
      category: 'Арбитраж'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" className="h-8 w-8 text-secondary" />
              <span className="text-2xl font-bold text-primary">ЛексПро</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'practice', label: 'Практика' },
                { id: 'team', label: 'Команда' },
                { id: 'about', label: 'О нас' },
                { id: 'blog', label: 'Блог' },
                { id: 'testimonials', label: 'Отзывы' },
                { id: 'contacts', label: 'Контакты' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    activeSection === item.id ? 'text-secondary' : 'text-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex">
              Консультация
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-primary mb-6 leading-tight">
              Профессиональная <span className="text-secondary">юридическая</span> защита
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Комплексные юридические услуги для бизнеса и частных лиц. 
              Защищаем ваши интересы с 2008 года.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('contacts')} className="text-lg px-8">
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('services')} className="text-lg px-8">
                Наши услуги
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">15+</div>
                <div className="text-sm text-muted-foreground">лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">500+</div>
                <div className="text-sm text-muted-foreground">выигранных дел</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">98%</div>
                <div className="text-sm text-muted-foreground">довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Предоставляем полный спектр юридических услуг для защиты ваших интересов
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="practice" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Практика</h2>
            <p className="text-xl text-muted-foreground">Специализация и опыт нашей команды</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practices.map((practice, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-secondary mb-3">{practice.cases}</div>
                  <h3 className="text-lg font-semibold text-primary">{practice.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="team" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Наша команда</h2>
            <p className="text-xl text-muted-foreground">Опытные профессионалы на защите ваших интересов</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center">
                    <Icon name="User" className="h-16 w-16 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
                  <p className="text-sm text-secondary font-medium mb-2">{member.position}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">О нас</h2>
          </div>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              <strong className="text-primary">ЛексПро</strong> — это команда высококвалифицированных юристов 
              с многолетним опытом работы в различных отраслях права. Мы специализируемся 
              на комплексном юридическом сопровождении бизнеса и защите интересов частных лиц.
            </p>
            <p>
              За 15 лет работы мы выиграли более 500 дел в судах всех инстанций, 
              включая Верховный суд РФ. Наш подход основан на глубоком понимании 
              законодательства, внимательном отношении к каждому клиенту и стремлении 
              к максимально эффективному результату.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Icon name="Award" className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Экспертность</h4>
                <p className="text-sm">Глубокие знания во всех отраслях права</p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Icon name="Target" className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Результат</h4>
                <p className="text-sm">Фокус на достижении целей клиента</p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Icon name="Heart" className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Забота</h4>
                <p className="text-sm">Индивидуальный подход к каждому</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Блог</h2>
            <p className="text-xl text-muted-foreground">Актуальные статьи и новости</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-sm text-secondary font-medium mb-2">{post.category}</div>
                  <h3 className="text-xl font-semibold text-primary mb-3 line-clamp-2">{post.title}</h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Icon name="Calendar" className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Отзывы</h2>
            <p className="text-xl text-muted-foreground">Что говорят наши клиенты</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="h-5 w-5 text-secondary fill-secondary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-primary">{testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Контакты</h2>
            <p className="text-xl text-muted-foreground">Запишитесь на консультацию прямо сейчас</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-primary mb-6">Свяжитесь с нами</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-primary">Адрес</p>
                    <p className="text-muted-foreground">г. Москва, ул. Тверская, д. 10, офис 501</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-primary">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-muted-foreground">info@lexspro.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-primary">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 9:00 - 19:00<br />Сб-Вс: по записи</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold text-primary mb-6">Форма записи</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Имя *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="example@mail.ru"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Сообщение</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Опишите вашу ситуацию"
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Scale" className="h-8 w-8 text-secondary" />
                <span className="text-2xl font-bold">ЛексПро</span>
              </div>
              <p className="text-sm opacity-80">
                Профессиональная юридическая защита с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Корпоративное право</li>
                <li>Арбитражные споры</li>
                <li>Договорное право</li>
                <li>Трудовое право</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Команда</li>
                <li>Практика</li>
                <li>Блог</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (495) 123-45-67</li>
                <li>info@lexspro.ru</li>
                <li>г. Москва, ул. Тверская, 10</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 ЛексПро. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
