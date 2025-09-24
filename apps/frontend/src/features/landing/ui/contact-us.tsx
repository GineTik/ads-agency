import { Button } from "@/shared/components/ui-kit/button";
import { Input } from "@/shared/components/ui-kit/input";
import { Textarea } from "@/shared/components/ui-kit/textarea";
import { ArrowRightIcon, MailOpenIcon, PhoneIcon } from "lucide-react";

export function ContactUs() {
  return (
    <section className="flex flex-col items-center py-20 space-y-6">
      <h2>Зв'язатись з нами</h2>
      <div className="max-w-[450px] w-full space-y-1.5 bg-slate-100 p-2 rounded-xl flex flex-col items-end">
        <Input
          placeholder="Телефон або пошта"
          className="bg-white border-none shadow-sm"
        />
        <Textarea
          placeholder="Ваше зверенення"
          className="bg-white border-none min-h-48 shadow-sm resize-none"
        ></Textarea>
        <Button variant="soft" size="sm">
          Відправити <ArrowRightIcon />
        </Button>
      </div>
      <div className="flex gap-2 flex-wrap max-w-[400px] justify-center">
        <Button>
          <PhoneIcon /> Поздвонити
        </Button>
        <Button variant="secondary">
          <MailOpenIcon /> Написати на пошту
        </Button>
        <Button variant="secondary">Телеграм</Button>
        <Button variant="secondary">Вайбер</Button>
      </div>
      <div className="flex gap-2">
        <span>creativshik.manager@gmail.com</span>
        <b>·</b>
        <span>+3809999999999</span>
      </div>
    </section>
  );
}
