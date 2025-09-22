const baseUrl = '8059066613:AAFQ83Z8l5UIp7-87Fs5nTxmW1XZ7ld_Fq8'

export const sendMessage = async (message) => {
    const url = `https://api.telegram.org/bot${baseUrl}/sendMessage?chat_id=-4959165660&text=${message}&parse_mode=MarkdownV2`;
    const response = await fetch(url);
}
