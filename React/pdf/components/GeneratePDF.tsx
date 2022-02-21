import { Button } from "@chakra-ui/react";
import jsPDF from "jspdf";
import "jspdf-autotable";

import PDF, { Text, AddPage, Line, Image, Table, Html } from "jspdf-react";

export const GeneratePDF = ({ data }) => {
  const generate = () => {
    const doc = new jsPDF({
      orientation: "p",
      format: "a4",
    });

    doc.text(20, 20, "Hello world!");
    doc.text(20, 30, "This is client-side Javascript, pumping out a PDF.");
    doc.addPage();
    doc.text(20, 20, "Do you like that?");

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

    // ここでpdfファイルの名前をつけて保存できる
    doc.save("persons.pdf");
  };

  //  ここからjspdf-react
  const styleH1 = {
    fontSize: "15px",
    textAlign: "center",
    color: "red",
  };

  const invisibleStyle = {
    display: "none",
  };
  const properties = { header: "Acme" };
  const head = [["ID", "Name", "Country"]];
  const body = [
    [1, "Shaw", "Tanzania"],
    [2, "Nelson", "Kazakhstan"],
    [3, "Garcia", "Madagascar"],
  ];
  const img =
    "https://images.unsplash.com/photo-1645220589099-e77076d4606c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80";

  if (typeof window !== "undefined") {
  }
  return (
    <>
      <Button onClick={generate} colorScheme="teal" size="lg">
        PDFを作成する
      </Button>

      <PDF properties={properties} preview={true}>
        <Text x={35} y={25} size={40}>
          Octonyan loves jsPDF
        </Text>
        <Image src={img} x={15} y={40} width={180} height={180} />
        <AddPage />
        <Table head={head} body={body} />
        <AddPage format="a6" orientation="l" />
        <Text x={10} y={10} color="red">
          Sample
        </Text>
        <Line x1={20} y1={20} x2={60} y2={20} />
        <AddPage />
        <Html sourceById="page" />
      </PDF>
      <div id="page" style={invisibleStyle}>
        <h1 style={styleH1}>Source Html</h1>
        <p>
          <strong>lorem ipsumLorem </strong>Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has
          survived not only five centuries, but also the leap into electronic
          typesetting, remaining essentially unchanged. It was popularised in
          the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like
          Aldus PageMaker including versions of Lorem Ipsum.
        </p>
      </div>
    </>
  );
};
