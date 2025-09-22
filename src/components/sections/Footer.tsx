import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="footer" className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Informações da Empresa */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ConsAt'preV</h3>
            <p className="text-gray-300 mb-4">
              Assessoria especializada em direito trabalhista e previdenciário há mais de 15 anos.
            </p>
            <div className="flex space-x-4">
              <a href="#" target="_blank"><Facebook className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" /></a>
              <a href="https://www.instagram.com/consatprev?igsh=MXo5YXlxaGVvdGY0" target="_blank"><Instagram className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" /></a>
              <a href="https://www.linkedin.com/in/consatprev" target="_blank"><Linkedin className="w-5 h-5 text-gray-300 hover:text-white cursor-pointer" /></a>
            </div>
          </div>

          {/* Contatos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <span> (13) 98115-8016</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <span>consat.inter@gmail.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1" />
                <span>São Paulo, SP</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Serviços */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Assessoria Trabalhista</li>
              <li>Consultoria Previdenciária</li>
              <li>Mediação e Conciliação</li>
              <li>Compliance Empresarial</li>
            </ul>
          </div>

          {/* Links Úteis */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm" target="_blank" className="hover:text-white">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-white">Termos de Uso</a></li>
              <li><a href="#about" className="hover:text-white">Nossa História</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} ConsAt'preV. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};