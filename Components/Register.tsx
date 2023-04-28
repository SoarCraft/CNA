import { Button, Dialog, DialogActions, DialogBody, DialogContent, DialogSurface, DialogTitle, DialogTrigger } from "@fluentui/react-components";

/**
 * Register Modal
 *
 * @author Aloento
 * @since 0.1.0
 * @version 0.1.0
 */
export function Register({ open, close }: { open: boolean, close: () => void }) {
  return (
    <Dialog open={open} onOpenChange={close} modalType="alert">
      <DialogSurface>
        <DialogBody>
          <DialogTitle>Create New Account</DialogTitle>

          <DialogContent>
            123
          </DialogContent>

          <DialogActions>
            <DialogTrigger disableButtonEnhancement>
              <Button>Cancel</Button>
            </DialogTrigger>

            <DialogTrigger disableButtonEnhancement>
              <Button appearance="primary">Submit</Button>
            </DialogTrigger>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
}
