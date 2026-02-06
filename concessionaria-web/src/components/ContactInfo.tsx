export default function ContactInfo() {
  return (
    <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-white h-full">
      <h3 className="text-3xl font-bold mb-6">Informações de Contato</h3>
      <p className="text-lg mb-8 text-blue-100">
        Entre em contato conosco e tire todas as suas dúvidas. Estamos prontos
        para atendê-lo!
      </p>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">📞</span>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Telefone</h4>
            <p className="text-blue-100">(11) 9999-9999</p>
            <p className="text-blue-100">(11) 3333-3333</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">📧</span>
          </div>
          <div>
            <h4 className="font-semibold mb-1">E-mail</h4>
            <p className="text-blue-100">contato@motorshow.com.br</p>
            <p className="text-blue-100">vendas@motorshow.com.br</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">📍</span>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Endereço</h4>
            <p className="text-blue-100">Av. Paulista, 1000</p>
            <p className="text-blue-100">São Paulo - SP, 01310-100</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
            <span className="text-2xl">🕐</span>
          </div>
          <div>
            <h4 className="font-semibold mb-1">Horário de Atendimento</h4>
            <p className="text-blue-100">Seg - Sex: 9h às 18h</p>
            <p className="text-blue-100">Sábado: 9h às 14h</p>
            <p className="text-blue-100">Domingo: Fechado</p>
          </div>
        </div>
      </div>
    </div>
  );
}
