import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";
import Layout from "@/components/Layout";

export default function ContactPage() {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Estamos prontos para ajudá-lo a encontrar o veículo dos seus sonhos
          </p>
        </div>
      </section>

      {/* Formulário */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Envie sua Mensagem
              </h2>
              <ContactForm />
            </div>

            <ContactInfo />
          </div>
        </div>
      </section>

      {/* Mapa (placeholder) */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">
            Nossa Localização
          </h2>
          <div className="bg-gray-300 rounded-2xl h-96 flex items-center justify-center">
            <p className="text-gray-600 text-lg">Integração Google Maps</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
