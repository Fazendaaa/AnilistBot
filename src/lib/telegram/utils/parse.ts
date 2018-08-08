export const sanitize = ({ message }: { message: string }): string => message.replace(/(?:=\(|:0|:o|: o|: 0)/, ': o');
