import { DescriptionContext } from ".";
import { formatPreview, sourcePreview } from "./preview";

export const descriptionMedia = ({ format, source, translation }: DescriptionContext): string => {
    let response = '';

    if (null === format && null === source) {
        return translation.t('notAvailable');
    } if (null !== format) {
        response += translation.t('fmt') + formatPreview({ format, translation }) + '\n';
    } if (null !== source) {
        response += translation.t('src') + sourcePreview({ source, translation });
    }

    return response;
};
