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
      icon: 'Users',
      title: 'Гражданские споры',
      description: 'Взыскание долгов, оспаривание сделок, защита прав потребителей'
    },
    {
      icon: 'Heart',
      title: 'Семейное право',
      description: 'Развод, раздел имущества, алименты, определение места жительства детей'
    },
    {
      icon: 'Shield',
      title: 'Уголовная защита',
      description: 'Представительство на следствии и в суде, защита на всех стадиях процесса'
    },
    {
      icon: 'Building2',
      title: 'Корпоративное право',
      description: 'Регистрация и реорганизация бизнеса, сопровождение сделок, разрешение корпоративных конфликтов'
    },
    {
      icon: 'Home',
      title: 'Недвижимость',
      description: 'Сделки с недвижимостью, оспаривание прав, споры с застройщиками'
    },
    {
      icon: 'Briefcase',
      title: 'Трудовые споры',
      description: 'Защита прав работников и работодателей, восстановление на работе, взыскание компенсаций'
    },
    {
      icon: 'Calculator',
      title: 'Налоговое право',
      description: 'Консультации, защита при налоговых проверках, обжалование решений ФНС'
    }
  ];

  const advantages = [
    { name: 'Опыт и профессионализм', value: '15+', unit: 'лет' },
    { name: 'Индивидуальный подход', value: '100%', unit: 'клиентов' },
    { name: 'Прозрачность работы', value: '24/7', unit: 'связь' },
    { name: 'Результативность', value: '90%', unit: 'успех' }
  ];

  const workProcess = [
    {
      step: '1',
      title: 'Бесплатная консультация',
      description: 'Оцениваем ситуацию и определяем возможные пути решения'
    },
    {
      step: '2',
      title: 'Разработка стратегии',
      description: 'Составляем план действий с учётом ваших целей и рисков'
    },
    {
      step: '3',
      title: 'Заключение договора',
      description: 'Фиксируем объём услуг, сроки и стоимость'
    },
    {
      step: '4',
      title: 'Реализация',
      description: 'Ведём дело до достижения результата'
    },
    {
      step: '5',
      title: 'Отчёт и рекомендации',
      description: 'Подводим итоги и даём советы по предотвращению подобных ситуаций'
    }
  ];

  const testimonials = [
    {
      text: 'Профессиональная команда, которая решила наш сложный спор. Индивидуальный подход и качественная работа!',
      author: 'ООО "ТехПром"',
      rating: 5
    },
    {
      text: 'Отличное юридическое сопровождение сделки с недвижимостью. Все прошло быстро и без проблем.',
      author: 'Андрей К.',
      rating: 5
    },
    {
      text: 'Грамотные специалисты, внимательное отношение к клиенту. Помогли выиграть семейный спор. Спасибо!',
      author: 'Елена М.',
      rating: 5
    }
  ];

  const blogPosts = [
    {
      title: 'Новые изменения в законодательстве о недвижимости 2024',
      date: '15 декабря 2023',
      category: 'Недвижимость'
    },
    {
      title: 'Как защитить бизнес от недобросовестных контрагентов',
      date: '10 декабря 2023',
      category: 'Корпоративное право'
    },
    {
      title: 'Трудовые споры: топ-5 прав работников, о которых не знают',
      date: '5 декабря 2023',
      category: 'Трудовое право'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-2">
              <Icon name="Scale" className="h-8 w-8 text-secondary" />
              <span className="text-xl md:text-2xl font-bold text-primary">Ерещенко и Партнёры</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'services', label: 'Услуги' },
                { id: 'advantages', label: 'Преимущества' },
                { id: 'process', label: 'Как работаем' },
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
              Юридическое бюро <span className="text-secondary">«Ерещенко и Партнёры»</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ростов-на-Дону — защита ваших прав и интересов. 
              Мы решаем сложные юридические задачи более 15 лет.
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
                <div className="text-4xl font-bold text-secondary mb-2">1000+</div>
                <div className="text-sm text-muted-foreground">выигранных дел</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">дел в пользу клиентов</div>
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

      <section id="advantages" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Почему выбирают нас?</h2>
            <p className="text-xl text-muted-foreground">Наши преимущества и гарантии</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="text-5xl font-bold text-secondary mb-3">{advantage.value}</div>
                  <div className="text-sm text-muted-foreground mb-3">{advantage.unit}</div>
                  <h3 className="text-lg font-semibold text-primary">{advantage.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Как мы работаем?</h2>
            <p className="text-xl text-muted-foreground">Прозрачный и понятный процесс работы</p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {workProcess.map((item, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-1">
                <CardContent className="p-6 flex items-start gap-6">
                  <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-white">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
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
              Мы — команда опытных юристов и адвокатов, которые более 15 лет помогают физическим и юридическим лицам находить выход из самых непростых правовых ситуаций.
            </p>
            <p>
              Наша цель — обеспечить вам надёжную юридическую защиту и максимально эффективное решение ваших вопросов. Более 90% дел завершаются в пользу наших клиентов благодаря профильной специализации и многолетней практике.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Icon name="Award" className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Прозрачность</h4>
                <p className="text-sm">Чёткие сроки, понятная стоимость услуг, регулярные отчёты о проделанной работе</p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Icon name="Lock" className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Конфиденциальность</h4>
                <p className="text-sm">Все сведения, полученные от клиента, строго защищены адвокатской тайной</p>
              </div>
              <div className="text-center p-6 bg-muted/30 rounded-lg">
                <Icon name="Target" className="h-12 w-12 text-secondary mx-auto mb-3" />
                <h4 className="font-semibold text-primary mb-2">Результативность</h4>
                <p className="text-sm">Более 90% дел завершаются в пользу наших клиентов</p>
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
                    <p className="text-muted-foreground">г. Ростов-на-Дону, ул. Островского, 22, офис 456</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Phone" className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-primary">Телефон / WhatsApp</p>
                    <p className="text-muted-foreground">+7 (928) 279-80-78</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Mail" className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-primary">Email</p>
                    <p className="text-muted-foreground">2798078@mail.ru</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Clock" className="h-6 w-6 text-secondary mt-1" />
                  <div>
                    <p className="font-medium text-primary">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 09:00 - 18:00<br />Сб: 10:00 - 14:00</p>
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
                <span className="text-xl font-bold">Ерещенко и Партнёры</span>
              </div>
              <p className="text-sm opacity-80">
                Юридическое бюро в Ростове-на-Дону с 2008 года
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Гражданские споры</li>
                <li>Семейное право</li>
                <li>Уголовная защита</li>
                <li>Корпоративное право</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>О нас</li>
                <li>Как мы работаем</li>
                <li>Наши преимущества</li>
                <li>Отзывы</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>+7 (928) 279-80-78</li>
                <li>2798078@mail.ru</li>
                <li>г. Ростов-на-Дону, ул. Островского, 22</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm opacity-80">
            © 2024 Юридическое бюро «Ерещенко и Партнёры». Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}
