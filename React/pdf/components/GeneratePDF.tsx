import { Button } from "@chakra-ui/react";
import jsPDF from "jspdf";
import "jspdf-autotable";

export const GeneratePDF = ({ data }) => {
  const generate = () => {
    const doc = new jsPDF({
      orientation: "p",
      format: "a4",
    });

    // doc.autoTable({
    //   head: [["Name", "Age", "Address"]],
    //   body: data.map(({ name, age, address }) => {
    //     return [name, age, address];
    //   }),
    // });

    // doc.addFileToVFS("mplus.ttf", myFont);
    // doc.addFont("mplus.ttf", "mplus", "normal");
    // doc.setFont("mplus", "normal"); // ↑で名付けた名前を設定する。

    doc.text("ユーザー太郎 様", 120, 30);
    //data
    doc.setFontSize(24);
    doc.save("persons.pdf");
  };

  return (
    <Button onClick={generate} colorScheme="teal" size="lg">
      PDFを作成す
    </Button>
  );
};
