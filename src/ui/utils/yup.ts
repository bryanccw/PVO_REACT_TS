import yup, { ValidationError } from 'yup';

export interface YupErrorType {
  field: string;
  error: string;
}

export const yupErrorsObject = (err: ValidationError): YupErrorType[] => {
  let object: YupErrorType[] = [];

  err.inner.forEach(x => {
    if (x.path !== undefined) {
      object.push({
        field: x.path,
        error: x.errors.toString(),
      });
    }
  });

  return object;
};

export const yupErrorsMessage = (err: ValidationError): string[] => {
  let objects: YupErrorType[] = yupErrorsObject(err);
  return objects.map(obj => {
    return obj.error;
  });
};

// not working
export const yupFieldRequired = (field: string, schema: yup.AnyObject) => {
  return schema.fields[field]?._exclusive?.required || false;
};
