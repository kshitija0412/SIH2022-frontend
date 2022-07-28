import React from "react";
import { Button, Text } from "@mantine/core";
import { useModals } from "@mantine/modals";

function DeleteModal() {
	// const modals = useModals();

	// const openDeleteModal = () =>
	//   modals.openConfirmModal({
	//     title: 'Delete your file',
	//     centered: true,
	//     children: (
	//       <Text size="sm">
	//         Are you sure you want to delete your document? This action is
	// 				destructive and you will have to reupload the document.
	//       </Text>
	//     ),
	//     labels: { confirm: 'Delete file', cancel: "No don't delete it" },
	//     confirmProps: { color: 'red' },
	//     onCancel: () => console.log('Cancel'),
	//     onConfirm: () => console.log('Confirmed'),
	//   });

	// return <Button onClick={openDeleteModal} color="red">
	// 			Delete file
	// 		</Button>;

	const modals = useModals();

	const openConfirmModal = () =>
		modals.openConfirmModal({
			title: "Delete your file",
			children: (
				<Text size="sm">
					Are you sure you want to delete your document? This action is
	// 				destructive and you will have to reupload the document.
				</Text>
			),
			labels: { confirm: "Confirm", cancel: "Cancel" },
			onCancel: () => console.log("Cancel"),
			onConfirm: () => console.log("Confirmed"),
		});

	return <Button onClick={openConfirmModal}>Delete File</Button>;
}

export default DeleteModal;
