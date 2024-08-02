import { ref } from "vue";

export function useRichEdit() {
  const fontName = ref("Arial");
  const fontNameList = ref([
    "Arial",
    "Verdana",
    "Times New Roman",
    "Garamond",
    "Georgia",
    "Courier New",
    "Cursive",
  ]);

  const formatBlock = ref("H1");
  const formatBlockList = ref(["H1", "H2", "H3", "H4", "H5", "H6"]);

  const fontSize = ref(1);
  const fontSizeList = ref([1, 2, 3, 4, 5, 6, 7]);

  const foreColor = ref("#000000");

  const HighlightColor = ref("#000000");

  const intializer = () => {};

  const highlighter = () => {};

  const modifyText = (command: string, defaultUi: boolean, value: any) => {
    document.execCommand(command, defaultUi, value);
  };

  function handleOptions(type: string) {
    modifyText(type, false, null);
  }

  return {
    fontName,
    fontNameList,
    formatBlock,
    formatBlockList,
    fontSize,
    fontSizeList,
    foreColor,
    HighlightColor,
    handleOptions,
  };
}
