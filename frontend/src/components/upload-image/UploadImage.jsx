import React from 'react';
import classNames from 'classnames';

import { Typography } from '@material-ui/core';
import FormHelperText from '@material-ui/core/FormHelperText';

import CropOriginalIcon from '@material-ui/icons/CropOriginal';
import EditIcon from '@material-ui/icons/Edit';

import { CircularLoader } from 'components';

import { useStyles } from './styles';

const DndUploadImage = ({
  input,
  label,
  className,
  meta: { touched, error },
}) => {
  const classes = useStyles();

  const [drag, setDrag] = React.useState(false);
  const [isLoading, setLoading] = React.useState(false);

  const dropRef = React.createRef();
  let dragCounter = 0;

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dragCounter++;

    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDrag(true);
    }
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();

    dragCounter--;

    if (dragCounter === 0) {
      setDrag(false);
    }
  };

  const handleDrop = (e) => {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();

    setDrag(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      let reader = new FileReader();
      const file = e.dataTransfer.files[0];

      reader.onload = (imageEvent) => {
        setLoading(false);
        onChangeHandler({
          file: file,
          image: imageEvent.target.result,
        });
      };

      reader.readAsDataURL(e.dataTransfer.files[0]);
      e.dataTransfer.clearData();
      dragCounter = 0;
    } else {
      setLoading(false);
    }
  };

  const uploadImage = (e) => {
    if (!e.target.files.length) return;

    setLoading(true);

    let reader = new FileReader();
    const file = e.target.files[0];

    reader.onload = (imageEvent) => {
      setLoading(false);
      onChangeHandler({
        file: file,
        image: imageEvent.target.result,
      });
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  React.useEffect(() => {
    const div = dropRef.current;

    div.addEventListener('dragenter', handleDragIn);
    div.addEventListener('dragleave', handleDragOut);
    div.addEventListener('dragover', handleDrag);
    div.addEventListener('drop', handleDrop);

    return () => {
      div.removeEventListener('dragenter', handleDragIn);
      div.removeEventListener('dragleave', handleDragOut);
      div.removeEventListener('dragover', handleDrag);
      div.removeEventListener('drop', handleDrop);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChangeHandler = (obj) => {
    input.onChange(obj);
  };

  return (
    <div className={className}>
      <Typography className={classes.label} variant="h3">
        {label}
      </Typography>

      <div
        className={classNames(
          classes.defaultZone,
          {
            [classes.imageZone]: input.value.image && input.value.image.length,
          },
          { [classes.error]: touched && error }
        )}
        ref={dropRef}
      >
        <CircularLoader
          isLoading={isLoading}
          className={classes.loaderWrapper}
        />
        {drag && <div className={classes.drag}>{''}</div>}
        <input
          onChange={uploadImage}
          accept=".png, .jpg, .jpeg"
          className={classes.input}
          id="icon-button-file"
          type="file"
        />
        {input.value.image && input.value.image.length ? (
          <div
            style={{ backgroundImage: `url(${input.value.image})` }}
            className={classes.imageBlock}
          >
            <label htmlFor="icon-button-file" className={classes.editBtnLabel}>
              <EditIcon className={classes.editBtn} />
            </label>
          </div>
        ) : (
          <div className={classes.content}>
            <CropOriginalIcon className={classes.imageIcon} />
            <Typography className={classes.description} variant="body1">
              Drop file here or{' '}
              <label htmlFor="icon-button-file" className={classes.browseWord}>
                browse
              </label>{' '}
              (file size limit is 10MB)
            </Typography>
          </div>
        )}
      </div>

      {touched && error && (
        <FormHelperText error classes={{ root: classes.errorMsg }}>
          {error}
        </FormHelperText>
      )}
    </div>
  );
};

export default DndUploadImage;
